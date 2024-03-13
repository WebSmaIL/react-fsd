export interface IConfig {
  path: string;
  content: string;
  key?: Keys;
}

export type Keys = "lib" | "model" | "api" | "ui";
