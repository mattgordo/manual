import { isCSR } from "./helpers";

export type TUseLocalStorage<T> = {
  getItem: () => T | undefined;
  setItem: (value: T) => void;
  removeItem: () => void;
};

/**
 * @author Serif Colakel - https://dev.to/serifcolakel/simplify-local-storage-management-in-react-with-the-uselocalstorage-hook-4eh7
 * @name useLocalStorage
 * @description See the test for this hook {@link https://gist.github.com/serifcolakel/44cb296dd5cb8983a5e2deb14d962878 Gist Link}
 * @description A custom hook that provides methods to interact with the local storage.
 * @template T - The type of the value to be stored in the local storage.
 * @param {string} key - The key to be used to store the value in the local storage.
 * @returns {TUseLocalStorage} - An object containing methods to set, get and remove the value from the local storage.
 */
export function useLocalStorage<T>(key: string): TUseLocalStorage<T> {
  /**
   * @description A function to set the value in the local storage.
   * @param {T} value - The value to be stored in the local storage.
   * @returns {void}
   */
  const setItem = (value: T): void => {
    try {
      isCSR() && window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * @description A function to get the value from the local storage.
   * @returns {T | undefined} - The value retrieved from the local storage, or undefined if an error occurred.
   */
  const getItem = (): T | undefined => {
    try {
      let item = null;

      // Was getting warnings throughout that window was not defined so needed to make this helper function to fix errors
      if (isCSR()) {
        item = window.localStorage.getItem(key);
      }

      if (!item) return undefined;

      return JSON.parse(item);
    } catch (error) {
      console.log(error);

      return undefined;
    }
  };

  /**
   * @description A function to remove the value from the local storage.
   * @returns {void}
   */
  const removeItem = (): void => {
    try {
      isCSR() && window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };

  return { getItem, setItem, removeItem };
}