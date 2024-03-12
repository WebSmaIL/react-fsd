import { IConfig } from "../types";

export const CONFIG_DATA: IConfig[] = [
  // INDEX
  {
    path: "/index.ts",
    content: `export {default as DEFAULT_NAME} from './ui';`,
  },

  // LIB
  {
    path: "/lib/index.ts",
    content: `export const libFunc = () => 'DEFAULT_NAME';`,
  },

  // MODEL
  {
    path: "/model/index.ts",
    content: `export const DEFAULT_NAME_MODEL = 'DEFAULT_NAME';`,
  },

  // API
  {
    path: "/api/index.ts",
    content: `export const apiFunc = () = 'DEFAULT_NAME';`,
  },

  // UI
  {
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
