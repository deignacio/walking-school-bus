import React from 'react';
import './App.css';
import { DateUtils, LocationUtils } from './Utils';

import { SchoolModel, RouteModel, StopModel, RunModel } from './Models';
import { SchoolChooser, RouteChooser, LeaderChooser, LeaderChooserMode } from './Choosers';
import { ArrivedStop, NextStop, PendingStop } from './Stops';
import SCHOOLS from './Schools';

type AppProps = {}

type AppModel = {
  run: RunModel
}

export default class App extends React.Component<AppProps, AppModel> {

  constructor(props: AppProps, model: AppModel) {
    super(props, model)

    this.state = { run: { arrivals: [], leaders: [] } };
  }

  /** Async handler to record the school chosen in the run model */
  private async onSchoolChosen(school: SchoolModel): Promise<any> {
    this.setState( (state, props) => {
      state.run.school = school;
      return state;
    });
  }

  /** Convenience method, either renders the school chooser, or the chosen school */
  private get school(): any {
    if (!this.state.run.school) {
      return (<SchoolChooser
        schools={SCHOOLS}
        callback={(school: SchoolModel) => this.onSchoolChosen(school)}
        />);
    }
    return (<div className="Run-School">School: {this.state.run.school.name}</div>);
  }

  /** Async handler to record the route chosen in the run model */
  private async onRouteChosen(route: RouteModel): Promise<any> {
    this.setState( (state, props) => {
      state.run.route = route;
      return state;
    });
  }

  /** Convenience method, either renders the route chooser for the school or the chosen route */
  private get route(): any {
    if (!this.state.run.school) {
      return '';
    } else if (!this.state.run.route) {
      return (<RouteChooser
        routes={this.state.run.school.routes}
        callback={(route: RouteModel) => this.onRouteChosen(route)}
        />);
    }
    return (<div className="Run-Route">Route: {this.state.run.route.name}</div>);
  }

  /** Async handler to record that a leader has been specified, starting the run if necessary */
  private async onLeaderChosen(leader: string): Promise<any> {
    this.setState( (state, props) => {
      state.run.leaders.push({ name: leader });
      if (!state.run.start) {
        state.run.start = new Date();
      }
      return state;
    });
  }

  /** Async handler to remove a leader from the run */
  private async onLeaderRemoved(leaderIndex: number): Promise<any> {
    this.setState( (state, props) => {
      state.run.leaders = state.run.leaders.filter((_, index) => index !== leaderIndex);
      return state;
    });
  }

  /** Convenience method, either renders the start route button or the current leader */
  private get leader(): any {
    if (!this.state.run.school || !this.state.run.route) {
      return '';
    } else if (this.state.run.leaders.length === 0) {
      return (<LeaderChooser mode={LeaderChooserMode.First} callback={(leader:string) => this.onLeaderChosen(leader)}/>);
    }
    const numLeaders = this.state.run.leaders.length;
    const leaders: Array<any> = this.state.run.leaders.map((leader, i) => {
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
      <LeaderChooser mode={LeaderChooserMode.Add} callback={(leader:string) => this.onLeaderChosen(leader)}/>
      </div>);
  }

  /** Convenience method, renders the start time of the run if it has started */
  private get start(): any {
    if (!this.state.run.start) {
      return '';
    }

    return (<div className="Run-Start">Start: {this.state.run.start.toISOString()}</div>);
  }

  /** Async handler, records an arrival at a stop in the run model */
  private async onArrival(stop: StopModel): Promise<any> {
    const here = await LocationUtils.getCurrentPosition();
    this.setState( (state, props) => {
      const now = DateUtils.now();
      state.run.arrivals.push({
        stop: stop,
        timestamp: now,
        position: here,
      });
      if (state.run.route && state.run.arrivals.length === state.run.route.stops.length) {
        state.run.end = now;
      }
      return state;
    });
  }

  /** Most of the magic is here, renders the different stops along the route with their current state */
  private get stops(): any {
    if (!this.state.run.route || !this.state.run.start) {
      return '';
    }
    const elements: Array<any> = [];
    // Loop through all stops that we've already arrived at
    let i = 0;
    for (; i < this.state.run.arrivals.length; i++) {
      const arrival = this.state.run.arrivals[i];
      elements.push((<ArrivedStop arrival={arrival} key={i + ''}/>));
    }

    // Render the next stop along the route
    const nextStop = this.state.run.route.stops[i];
    if (nextStop) {
      elements.push((<NextStop stop={nextStop} onArrival={(stop: StopModel) => this.onArrival(stop)} key={i + ''}/>));
      i++;
    }

    // Render any pending steps remaining in the route
    while (i < this.state.run.route.stops.length) {
      const stop = this.state.run.route.stops[i];
      elements.push((<PendingStop stop={stop} key={i + ''}/>));
      i++;
    }
    return elements;
  }

  /** Convenience method, renders the end time of the run, if any */
  private get end(): any {
    if (!this.state.run.end) {
      return '';
     }
    return (<div className="Run-End">End: {this.state.run.end.toISOString()}</div>);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Walking School Bus</p>
        </header>
        <div className="Run">
          {this.school}
          {this.route}
          {this.leader}
          {this.start}
          {this.stops}
          {this.end}
        </div>
      </div>
    );
  }
}
