import { IFileExtensions } from "../types";

export const validateData = [
  {
    message: "Folder name cannot be empty",
    validate: (value: string) => value === "",
  },
  {
    message: "Folder name must start with a capital letter",
    validate: (value: string) => value[0] === value.toLowerCase()[0],
  },
  {
    message: "Folder name cannot be have a special symbols",
    validate: (value: string) =>
      /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value),
  },
];

export const getFileExtension = (
  language: "javascript" | "typescript",
  fileExtensions: IFileExtensions[]
): ".js" | ".ts" | ".jsx" | ".tsx" => {
  return fileExtensions.find((el) => el.language === language)?.type || ".ts";
};
