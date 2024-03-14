import { QuickPickItem, QuickPickItemKind } from "vscode";
import { IConfig } from "../types";

export const CONFIG_DATA: IConfig[] = [
  // INDEX
  {
    path: "/index",
    content: `export {default as DEFAULT_NAME} from './ui';`,
    fileExtension: [
      { language: "javascript", type: ".js" },
      { language: "typescript", type: ".ts" },
    ],
  },

  // LIB
  {
    path: "/lib/index",
    content: `export const libFunc = () => 'DEFAULT_NAME';`,
    key: "lib",
    fileExtension: [
      { language: "javascript", type: ".js" },
      { language: "typescript", type: ".ts" },
    ],
  },

  // MODEL
  {
    path: "/model/index",
    content: `export const DEFAULT_NAME_MODEL = 'DEFAULT_NAME';`,
    key: "model",
    fileExtension: [
      { language: "javascript", type: ".js" },
      { language: "typescript", type: ".ts" },
    ],
  },

  // API
  {
    path: "/api/index",
    content: `export const apiFunc = () => 'DEFAULT_NAME';`,
    key: "api",
    fileExtension: [
      { language: "javascript", type: ".js" },
      { language: "typescript", type: ".ts" },
    ],
  },

  // UI
  {
    key: "ui",
    fileExtension: [
      { language: "javascript", type: ".jsx" },
      { language: "typescript", type: ".tsx" },
    ],
    path: "/ui/index",
    content: `import React from 'react'

const DEFAULT_NAME = () => {
  return (
    <div>DEFAULT_NAME</div>
  )
}

export default DEFAULT_NAME
    `,
  },
];

export const SEGMENTS_KEYS: QuickPickItem[] = [
  {
    label: "lib",
    description: "Infrastructure support code",
    picked: true,
    kind: QuickPickItemKind.Default,
  },
  {
    label: "model",
    description:
      "Business logic and data warehouses, functions for processing this data",
    picked: true,
    kind: QuickPickItemKind.Default,
  },
  {
    label: "api",
    description: "Interaction with external APIs, backend API methods",
    picked: true,
    kind: QuickPickItemKind.Default,
  },
  {
    label: "ui",
    description: "UI components, data formatting functions",
    picked: true,
    kind: QuickPickItemKind.Default,
  },
];
