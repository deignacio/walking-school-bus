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
        const isDeveloper = DeveloperUtils.isDeveloper();
        if (isDeveloper) {
          resolve(DeveloperUtils.fakePosition());
        } else {
          reject(error);
        }
      }, LocationUtils.POSITION_OPTIONS);
    });
  }
}

export {
  DateUtils,
  LocationUtils
}
