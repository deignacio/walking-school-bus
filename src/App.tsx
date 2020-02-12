import React from 'react';
import './App.css';
import { DateUtils, LocationUtils, RunPersistence } from './Utils';

import { SchoolModel, RouteModel, BusLeader, StopModel, RunModel, StopArrivalModel } from './Models';
import { SchoolChooser, RouteChooser, LeaderChooser, LeaderChooserMode } from './Choosers';
import { ArrivedStop, NextStop, PendingStop } from './Stops';
import SCHOOLS from './Schools';

type AppProps = {}

enum AppMode {
  LEAD, WATCH
};

type AppState = RunModel & {
  mode: AppMode,
  previous: Array<RunModel>,
  watch?: NodeJS.Timeout,
};

const initialState = {
  mode: AppMode.WATCH,
  leaders: new Array<BusLeader>(),
  arrivals: new Array<StopArrivalModel>(),
  previous: new Array<RunModel>(),
};

export default class App extends React.Component<AppProps, AppState> {
  readonly state: AppState = initialState;

  componentDidMount() {
    RunPersistence.listOpenRuns().then((previous: Array<RunModel>) => this.onPreviousRuns(previous));
  }

  componentWillUnmount() {
    this.stopWatch();
  }

  private startWatch() {
    if (this.state.watch === undefined) {
      const watch = setInterval( () => {
        if (this.state.mode === AppMode.LEAD) {
          this.stopWatch();
        } else {
          RunPersistence.listOpenRuns().then((previous: Array<RunModel>) => this.onPreviousRuns(previous));
        }
      }, 15 * 1000);
      this.setState({ watch: watch });
    }
  }

  private stopWatch() {
    if (this.state.watch) {
      clearInterval(this.state.watch);
      this.setState({ watch: undefined });
    }
  }

  private async onPreviousRuns(previous: Array<RunModel>) {
    this.setState({ previous: previous });
  }

  private async onPreviousJoin(run: RunModel) {
    this.setState({ mode: AppMode.LEAD });
    this.setState(run);
    this.stopWatch();
  }

  private async onCreateNew() {
    this.setState({ mode: AppMode.LEAD });
    this.stopWatch();
  }

  private get previous(): any {
    let previous: any = this.state.previous.map((run, i) => {
      const leaders = run.leaders
        .map((leader) => leader.name)
        .join(', ');
      const start = run.start?.toLocaleString();
      const lastStop = run.arrivals[run.arrivals.length - 1]?.stop.name;
      return (<div className="Previous-Run" key={i + ''}>
        <div className="Previous-Name">{run.school?.name} - {run.route?.name}</div>
        <div className="Previous-Start">{start}</div>
        <div className="Previous-Leaders">{leaders}</div>
        <div className="Previous-LastStop">Last Stop: {lastStop}</div>
        <div className="Previous-Buttons">
          <button onClick={() => this.onPreviousJoin(run)}>Join the Run</button> - <button onClick={() => this.startWatch()}>Watch for Updates</button>
        </div>
      </div>);
    });
    if (previous.length === 0) {
      previous = 'None';
    }
    return (<div className="Previous">
        <div className="Previous-Runs">
          Open Runs: {previous}
        </div>
        <hr/>
        <button onClick={() => this.onCreateNew()}>Create New Run</button>
      </div>);
  }

  /** Async handler to record the school chosen in the run model */
  private async onSchoolChosen(school: SchoolModel): Promise<any> {
    this.setState({ school: school });
  }

  /** Convenience method, either renders the school chooser, or the chosen school */
  private get school(): any {
    if (!this.state.school) {
      return (<SchoolChooser
        schools={SCHOOLS}
        callback={(school: SchoolModel) => this.onSchoolChosen(school)}
        />);
    }
    return (<div className="Run-School">School: {this.state.school.name}</div>);
  }

  /** Async handler to record the route chosen in the run model */
  private async onRouteChosen(route: RouteModel): Promise<any> {
    this.setState({ route: route });
  }

  /** Convenience method, either renders the route chooser for the school or the chosen route */
  private get route(): any {
    if (!this.state.school) {
      return '';
    } else if (!this.state.route) {
      return (<RouteChooser
        routes={this.state.school.routes}
        callback={(route: RouteModel) => this.onRouteChosen(route)}
        />);
    }
    return (<div className="Run-Route">Route: {this.state.route.name}</div>);
  }

  /** Async handler to record that a leader has been specified, starting the run if necessary */
  private async onLeaderChosen(leader: string): Promise<any> {
    this.setState( {
      leaders: [{ name: leader }],
      start: new Date(),
      mode: AppMode.LEAD,
    }, () => RunPersistence.emitRunUpdate(this.state));
  }

  private async onLeaderAdded(leader: string): Promise<any> {
    this.setState( (state, props) => {
      return { leaders: state.leaders.concat({ name: leader }) };
    }, () => RunPersistence.emitRunUpdate(this.state));

  }

  /** Async handler to remove a leader from the run */
  private async onLeaderRemoved(leaderIndex: number): Promise<any> {
    this.setState( (state, props) => {
      return { leaders: state.leaders.filter((_, index) => index !== leaderIndex) };
    }, () => RunPersistence.emitRunUpdate(this.state));
  }

  /** Convenience method, either renders the start route button or the current leader */
  private get leader(): any {
    if (!this.state.school || !this.state.route) {
      return '';
    } else if (this.state.leaders.length === 0) {
      return (<LeaderChooser mode={LeaderChooserMode.First} callback={(leader:string) => this.onLeaderChosen(leader)}/>);
    }
    const numLeaders = this.state.leaders.length;
    const leaders: Array<any> = this.state.leaders.map((leader, i) => {
      let removeButton: any = '';
      if (numLeaders > 1) {
        const index = i;
        removeButton = (<span>&nbsp;<button onClick={() => this.onLeaderRemoved(index)}>X</button></span>);
      }
      return (<div className="Run-Leader" key={leader.name + i}>
        {leader.name}
        {removeButton}
        </div>);
    });
    return (<div className="Run-Leaders">
      Leaders: {leaders}
      <LeaderChooser mode={LeaderChooserMode.Add} callback={(leader:string) => this.onLeaderAdded(leader)}/>
      </div>);
  }

  /** Convenience method, renders the start time of the run if it has started */
  private get start(): any {
    if (!this.state.start) {
      return '';
    }

    return (<div className="Run-Start">Start: {this.state.start.toLocaleString()}</div>);
  }

  /** Async handler, records an arrival at a stop in the run model */
  private async onArrival(stop: StopModel): Promise<any> {
    const here = await LocationUtils.getCurrentPosition();
    this.setState( (state, props) => {
      const now = DateUtils.now();
      return {
        arrivals: state.arrivals.concat({
          stop: stop,
          timestamp: now,
          position: here,
        })
      };
    }, () => {
      if (this.state.route && this.state.arrivals.length === this.state.route.stops.length) {
        this.setState({ end: DateUtils.now() }, () => RunPersistence.emitRunUpdate(this.state));
      } else {
        RunPersistence.emitRunUpdate(this.state);
      }
    });
  }

  /** Most of the magic is here, renders the different stops along the route with their current state */
  private get stops(): any {
    if (!this.state.route || !this.state.start) {
      return '';
    }
    const elements: Array<any> = [];
    // Loop through all stops that we've already arrived at
    let i = 0;
    for (; i < this.state.arrivals.length; i++) {
      const arrival = this.state.arrivals[i];
      elements.push((<ArrivedStop arrival={arrival} key={i + ''}/>));
    }

    // Render the next stop along the route
    const nextStop = this.state.route.stops[i];
    if (nextStop) {
      elements.push((<NextStop stop={nextStop} onArrival={(stop: StopModel) => this.onArrival(stop)} key={i + ''}/>));
      i++;
    }

    // Render any pending steps remaining in the route
    while (i < this.state.route.stops.length) {
      const stop = this.state.route.stops[i];
      elements.push((<PendingStop stop={stop} key={i + ''}/>));
      i++;
    }
    return elements;
  }

  /** Convenience method, renders the end time of the run, if any */
  private get end(): any {
    if (!this.state.end) {
      return '';
     }
    return (<div className="Run-End">End: {this.state.end.toLocaleString()}</div>);
  }

  /** Triggers a file download of the current run's data */
  private async onDownloadPressed(): Promise<any> {
    const options: BlobPropertyBag = { type: 'application/json' };
    const blob: Blob = new Blob([JSON.stringify(this.state)], options);
    const element = document.createElement('a');
    element.setAttribute('href', window.URL.createObjectURL(blob));
    const filename = this.state.school?.name + '-' + this.state.route?.name + '-' + this.state.start?.toISOString() + '.json';
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  /** Convenience method, renders a download button if the run is done */
  private get download(): any {
    if (!this.state.end) {
      return '';
    }

    return (<button onClick={() => this.onDownloadPressed()}>Download Data</button>)
  }

  render() {
    let body;
    if (this.state.mode === AppMode.WATCH) {
      body = this.previous;
    } else if (this.state.mode === AppMode.LEAD) {
      body = (<div className="Run">
        {this.school}
        {this.route}
        {this.leader}
        {this.start}
        {this.stops}
        {this.end}
        {this.download}
      </div>);
    }

    return (
      <div className="App">
        <header className="App-header">
          <p>Walking School Bus</p>
        </header>
        {body}
      </div>
    );
  }
}
