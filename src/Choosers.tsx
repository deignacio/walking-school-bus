import React from 'react';
import { SchoolModel, RouteModel } from './Models';
import Storage from './Storage';

/** The tag properties for the SchoolChooser component */
interface SchoolChooserProps {
  /** The schools for the user to choose from */
  schools: Array<SchoolModel>

  /** Callback invoked when a school is chosen */
  callback: (school: SchoolModel) => Promise<any>
}

/** React component to allow a user to choose a School */
class SchoolChooser extends React.Component<SchoolChooserProps> {
  render() {
    const schools: Array<any> = this.props.schools.map((school) =>
      (<div className="SchoolChooser-School" key={school.name}>
        <button onClick={() => this.props.callback(school)}>{school.name}</button>
      </div>)
    );
    return (<div className="SchoolChooser">
      Choose a school:
      <div className="SchoolChooser-Schools">{schools}</div>
    </div>);
  }
}

/** The tag properties for the RouteChooser component */
interface RouteChooserProps {
  /** The routes for the user to choose from */
  routes: Array<RouteModel>

  /** Callback invoked when a route is chosen */
  callback: (route: RouteModel) => Promise<any>
}

/** React component to allow a user to choose a Route */
class RouteChooser extends React.Component<RouteChooserProps> {
  render() {
    const routes: Array<any> = this.props.routes.map((route)=>
      (<div className="RouteChooser-Route" key={route.name}>
        <button onClick={() => this.props.callback(route)}>{route.name}</button>
      </div>)
    );
    return (<div className="RouteChooser">
      Choose a route:
      <div className="RouteChooser-Routes">{routes}</div>
    </div>);
  }
}

/** Is the LeaderChooser component specifying the first leader, or adding one? */
export enum LeaderChooserMode {
  First,
  Add
}

/** The tag properties for the LeaderChooser component */
interface LeaderChooserProps {
  /** The mode of the chooser, toggling the messages */
  mode: LeaderChooserMode

  /** Callback invoked when a leader is chosen */
  callback: (leader: string) => Promise<any>
}

/** React component to allow a user to specify the leader name */
class LeaderChooser extends React.Component<LeaderChooserProps> {
  static LEADER_STORAGE_KEY: string = 'leader';

  private getCachedLeaderName(): string | null {
    return Storage.get(LeaderChooser.LEADER_STORAGE_KEY);
  }

  private cacheLeaderName(leader: string): void {
    Storage.put(LeaderChooser.LEADER_STORAGE_KEY, leader);
  }

  private async onButtonPress() {
    const cached = this.getCachedLeaderName() || 'Anonymous';
    let message: string = 'Who is leading the route?';
    if (this.props.mode === LeaderChooserMode.Add) {
      message = 'Who is joining as a leader?';
    }
    const leader = prompt(message, cached) || 'Anonymous';
    if (leader !== 'Anonymous') {
      this.cacheLeaderName(leader);
    }
    this.props.callback(leader);
  }

  render() {
    let message: string = 'Start Route';
    if (this.props.mode === LeaderChooserMode.Add) {
      message = 'Add Leader';
    }
    return (<button onClick={() => this.onButtonPress()}>{message}</button>);
  }
}

export {
  SchoolChooser,
  RouteChooser,
  LeaderChooser,
}
