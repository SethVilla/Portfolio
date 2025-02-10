'use client'

import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {isDarkMode, toggleColorScheme} from "@/app/utils/utils";
import {LightScheme} from "@/app/types/type";

export const useColorScheme = (lightScheme?: LightScheme): [LightScheme, Dispatch<SetStateAction<LightScheme>>] => {
  const [scheme, setScheme] = useState<LightScheme>(lightScheme ?? isDarkMode ? LightScheme.DARK : LightScheme.LIGHT);

  useEffect(() => {
    toggleColorScheme(scheme);
  }, [scheme]);

  return [scheme, setScheme];
};
