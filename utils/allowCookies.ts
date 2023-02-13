export const setLocalStorage = (key: string, value: string) => {};

export const deleteLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

class AllowCookies {
  key: string;
  constructor(key: string = "ALLOW_COOKIES") {
    this.key = key;
  }

  allow = (): void => {
    localStorage.setItem(this.key, "true");
  };

  reject = (): void => {
    localStorage.setItem(this.key, "false");
  };

  clean = (): void => {
    localStorage.removeItem(this.key);
  };

  getAllow = (): string | null => {
    return localStorage.getItem(this.key);
  };
}

export default AllowCookies;
