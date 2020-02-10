/** Utility class to encapsulate short term storage */
export default class Storage {

  /** Retrieve the value from storage for the key, or undefined if not present */
  public static get(key: string): string | null {
    return localStorage.getItem(key);
  }

  /** Save the value in storage under the provided key */
  public static put(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}
