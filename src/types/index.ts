export interface IConfig {
  path: string;
  content: string;
  key?: Keys;
  fileExtension: IFileExtensions[];
}

export interface IFileExtensions {
  language: "javascript" | "typescript";
  type: ".js" | ".ts" | ".jsx" | ".tsx";
}

export type Keys = "lib" | "model" | "api" | "ui";
