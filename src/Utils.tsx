import { RunModel } from './Models';

/** Helper class to encapsulate Date methods */
class DateUtils {
  /** Helper that returns the current date */
  public static now(): Date {
    return new Date();
  }
}

class DeveloperUtils {
  static DEVELOPER_QUERY_PARAM: string = 'developer';
  static IS_DEVELOPER_VALUE: string = '1';

  static FAKE_COORDINATES: Coordinates = {
    accuracy: 1,
    altitude: 2,
    altitudeAccuracy: 3,
    heading: 4,
    latitude: 5,
    longitude: 6,
    speed: 7
  }

  static FAKE_RUN: RunModel = {
    school: {
      name: 'Fake School',
      routes: [{
        name: 'Fake Route',
        stops: [{
          name: 'Fake Stop A'
        }, {
          name: 'Fake Stop B'
        }]
      }]
    },
    route: {
      name: 'Fake Route',
      stops: [{
        name: 'Fake Stop A'
      }, {
        name: 'Fake Stop B'
      }]
    },
    leaders: [{ name: 'me' }],
    start: DateUtils.now(),
    arrivals: [{
      stop: {
        name: 'Fake Stop A'
      },
      timestamp: DateUtils.now(),
      position: {
        coords: DeveloperUtils.FAKE_COORDINATES,
        timestamp: DateUtils.now().getTime()
      }
    }]
  }

  public static isDeveloper(): boolean {
    const developerValue: string = new URLSearchParams(window.location.search).get(DeveloperUtils.DEVELOPER_QUERY_PARAM) || '0';
    return developerValue === DeveloperUtils.IS_DEVELOPER_VALUE;
  }

  public static fakePosition(): Position {
    return { timestamp: DateUtils.now().getTime(), coords: DeveloperUtils.FAKE_COORDINATES};
  }
}

/** Helper class to encapsulate Geolocation methods */
class LocationUtils {
  static POSITION_OPTIONS: PositionOptions = {
    maximumAge: 60 * 1000,
    timeout: 5 * 1000,
    enableHighAccuracy: true,
  }

  public static async getCurrentPosition(): Promise<Position> {
    return new Promise<Position>( (resolve, reject) => {
      window.navigator.geolocation.getCurrentPosition((position: Position) => {
        resolve(position);
      }, (error: PositionError) => {
        if (DeveloperUtils.isDeveloper()) {
          resolve(DeveloperUtils.fakePosition());
        } else {
          reject(error);
        }
      }, LocationUtils.POSITION_OPTIONS);
    });
  }
}

class RunPersistence {
  private static ENDPOINT: string = 'https://7098mtfhad.execute-api.us-west-2.amazonaws.com/Prod/WalkingSchoolBusRun';
  private static TABLE_NAME: string = 'walking-school-bus-runs';

  public static async emitRunUpdate(run: RunModel): Promise<Response> {
    run.arrivals = run.arrivals.map( (arrival) => {
      const position = {
        timestamp: arrival.position.timestamp,
        coords: {
          accuracy: arrival.position.coords.accuracy,
          altitude: arrival.position.coords.altitude,
          altitudeAccuracy: arrival.position.coords.altitudeAccuracy,
          heading: arrival.position.coords.heading,
          latitude: arrival.position.coords.latitude,
          longitude: arrival.position.coords.longitude,
          speed: arrival.position.coords.speed
        }
      }
      arrival.position = position
      return arrival;
    })
    const body: string = JSON.stringify({
      TableName: 'walking-school-bus-runs',
      Item: {
        school_route: run.school?.name + '_' + run.route?.name,
        start: run.start,
        run: run
      }
    });
    return fetch(RunPersistence.ENDPOINT, {
      method: 'POST',
      body: body,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  public static async listOpenRuns(): Promise<Array<RunModel>> {
    return fetch(`${RunPersistence.ENDPOINT}?TableName=${RunPersistence.TABLE_NAME}`, {
        method: 'GET',
        mode: 'cors'
      })
      .then((response: Response) => response.json())
      .catch((reason) => {
        console.log('Catching listOpenRuns: ' + reason);
        if (DeveloperUtils.isDeveloper()) {
          return JSON.parse('{"Items":[{"run":{"mode":0,"route":{"name":"Jefferson","stops":[{"name":"20th Ave and East Jefferson St"},{"name":"12th Ave and East Jefferson St"},{"name":"12th Ave and East Alder St"},{"name":"School"}]},"previous":[],"arrivals":[{"stop":{"name":"20th Ave and East Jefferson St"},"timestamp":"2020-02-12T08:29:57.044Z","position":{}}],"school":{"name":"Bailey Gatzert","routes":[{"name":"Jefferson","stops":[{"name":"20th Ave and East Jefferson St"},{"name":"12th Ave and East Jefferson St"},{"name":"12th Ave and East Alder St"},{"name":"School"}]},{"name":"Yesler","stops":[{"name":"19th Ave and East Yesler Way"},{"name":"17th Ave and East Yesler Way"},{"name":"15th Ave and East Yesler Way"},{"name":"School"}]}]},"start":"2020-02-12T08:29:54.289Z","leaders":[{"name":"Dave"}]},"school_route":"Bailey Gatzert_Jefferson","start":"2020-02-12T08:29:54.289Z"},{"run":{"mode":0,"route":{"name":"Jefferson","stops":[{"name":"20th Ave and East Jefferson St"},{"name":"12th Ave and East Jefferson St"},{"name":"12th Ave and East Alder St"},{"name":"School"}]},"previous":[],"arrivals":[],"school":{"name":"Bailey Gatzert","routes":[{"name":"Jefferson","stops":[{"name":"20th Ave and East Jefferson St"},{"name":"12th Ave and East Jefferson St"},{"name":"12th Ave and East Alder St"},{"name":"School"}]},{"name":"Yesler","stops":[{"name":"19th Ave and East Yesler Way"},{"name":"17th Ave and East Yesler Way"},{"name":"15th Ave and East Yesler Way"},{"name":"School"}]}]},"start":"2020-02-12T08:56:13.536Z","leaders":[{"name":"Anonymous"}]},"school_route":"Bailey Gatzert_Jefferson","start":"2020-02-12T08:56:13.536Z"}],"Count":2,"ScannedCount":2}');
          // return [DeveloperUtils.FAKE_RUN];
        } else {
          throw reason;
        }
      })
      .then((responseJSON) => responseJSON.Items)
      .then((items) => items.map((item: any) => item.run))
      .then((runs) => {
        return runs.map((run: any) => {
          run.start = new Date(Date.parse(run.start));
          run.previous = [];
          run.arrivals = run.arrivals.map((arrival: any) => {
            arrival.timestamp = new Date(Date.parse(arrival.timestamp));
            return arrival;
          })
          return run;
        })
        .filter((run: RunModel) => !run.end);
      });
  }
}

export {
  DateUtils,
  LocationUtils,
  RunPersistence,
}
