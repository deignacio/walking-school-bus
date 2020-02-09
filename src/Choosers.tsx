import React from 'react';
import { SchoolModel, RouteModel } from './Models';

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

export {
  SchoolChooser,
  RouteChooser,
}