export interface Dictionary<T> {
  [Key: string]: T;
}

export interface IScreensToIcons extends Dictionary<Array<string>> {}

export interface IRouterIcons {
  icons: Array<string>;
  focused: boolean;
  size: number;
  color: string;
}
