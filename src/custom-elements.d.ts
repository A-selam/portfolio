// src/types/iconify.d.ts

import { JSX } from "preact";

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": JSX.HTMLAttributes<HTMLElement> & {
        icon?: string;
        width?: string | number;
        height?: string | number;
        rotate?: string | number;
        flip?: string;
        inline?: boolean;
      };
    }
  }
}
