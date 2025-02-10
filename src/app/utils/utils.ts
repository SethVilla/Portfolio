'use client'

import { LightScheme } from "@/app/types/type";
import { bgTheme } from "@/app/themes/background";

export const isDarkMode = window?.matchMedia("(prefers-color-scheme: dark)")?.matches;

export const toggleColorScheme = (scheme: LightScheme) => {
  const root = document.documentElement;
  switch (scheme) {
    case LightScheme.LIGHT:
      root.style.setProperty(
        "--background",
        bgTheme[LightScheme.LIGHT].background,
      );
      root.style.setProperty(
        "--foreground",
        bgTheme[LightScheme.LIGHT].foreground,
      );
      break;
    case LightScheme.DARK:
      root.style.setProperty(
        "--background",
        bgTheme[LightScheme.DARK].background,
      );
      root.style.setProperty(
        "--foreground",
        bgTheme[LightScheme.DARK].foreground,
      );
      break;
    default:
      break;
  }
};
