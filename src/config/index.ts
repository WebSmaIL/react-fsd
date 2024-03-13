import { QuickPickItem, QuickPickItemKind } from "vscode";
import { IConfig } from "../types";

export const CONFIG_DATA: IConfig[] = [
  // INDEX
  {
    path: "/index.ts",
    content: `export * from './ui';`,
  },

  // LIB
  {
    path: "/lib/index.ts",
    content: `export const libFunc = () => 'DEFAULT_NAME';`,
    key: "lib",
  },

  // MODEL
  {
    path: "/model/index.ts",
    content: `export const DEFAULT_NAME_MODEL = 'DEFAULT_NAME';`,
    key: "model",
  },

  // API
  {
    path: "/api/index.ts",
    content: `export const apiFunc = () => 'DEFAULT_NAME';`,
    key: "api",
  },

  // UI
  {
    key: "ui",
    path: "/ui/index.tsx",
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

export const EXCEPTION_KEYS = ["ui"];
