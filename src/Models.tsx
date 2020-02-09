/** The data model to define a school and all related walking bus routes */
export interface SchoolModel {
  /** A human readable name of the school */
  name: string

  /** An Array of all walking school bus routes related to a school */
  routes: Array<RouteModel>
}

/** The data model to define a walking school bus route */
export interface RouteModel {
  /** A human readable name for the route */
  name: string

  /** An ordered array of all stops along the route */
  stops: Array<StopModel>
}

/** The data model to define a stop along a walking school bus route */
export interface StopModel {
  /** A human readable name for the stop */
  name: string
}

/** The data model that defines a specific walked instance of a walking school bus route */
export interface RunModel {
  /** The school related */
  school?: SchoolModel

  /** The route related */
  route?: RouteModel

  /** The leader(s) of the instance */
  leaders: Array<BusLeader>

  /** When the run started */
  start?: Date

  /** The actual arrival instances along the route */
  arrivals: Array<StopArrivalModel>

  /** When the run was ended */
  end?: Date
}

/** The metadata describing a bus leader */
export interface BusLeader {
  /** A human readable name for the bus leader, typically their name */
  name: string
}

/** The data model to define an arrival of the walking school bus at a stop */
export interface StopArrivalModel {
  /** The stop that the bus arrived at */
  stop: StopModel

  /** When the bus arrived at the stop */
  timestamp: Date
}
