import React from 'react';
import { StopModel, StopArrivalModel } from './Models';

type ArrivedStopParams = {
  arrival: StopArrivalModel
}

type StopParams = {
  stop: StopModel
}

type ArrivableStopParams = {
  onArrival: (stop: StopModel) => Promise<any>
}

/** A react component to render a stop for which the school bus has already arrived */
class ArrivedStop extends React.Component<ArrivedStopParams> {
  render() {
    return (<div className="ArrivedStop">
        <div className="ArrivedStop-Header">Arrived at Stop</div>
        <div className="ArrivedStop-Name">{this.props.arrival.stop.name}</div>
        <div className="ArrivedStop-Timestamp">{this.props.arrival.timestamp.toISOString()}</div>
        <div className="ArrivedStop-Position">Lat: {this.props.arrival.position.coords.latitude}, Lon: {this.props.arrival.position.coords.longitude}, Alt: {this.props.arrival.position.coords.altitude}</div>
      </div>);
  }
}

/** A react component to render the next stop along the route for a particular run */
class NextStop extends React.Component<StopParams & ArrivableStopParams> {
  render() {
    return (<div className="NextStop">
        <hr/>
        <div className="NextStop-Header">Next Stop</div>
        <div className="NextStop-Name">{this.props.stop.name}</div>
        <div className="NextStop-Arrive">
          <button onClick={() => this.props.onArrival(this.props.stop)}>Arrive!</button>
        </div>
        <hr/>
      </div>);
  }
}

/** A react component to render a stop along the route that the bus has not yet reached (and is not next) */
class PendingStop extends React.Component<StopParams> {
  render() {
    return (<div className="PendingStop">
        <div className="PendingStop-Header">Pending Stop</div>
        <div className="PendingStop-Name">{this.props.stop.name}</div>
      </div>);
  }
}

export {
  ArrivedStop,
  NextStop,
  PendingStop,
}