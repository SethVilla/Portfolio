"use client";

import {Switch} from "@headlessui/react";
import {useColorScheme} from "@/app/hooks/useColorScheme";
import {LightScheme} from "@/app/types/type";
import {MoonIcon, SunIcon} from "@heroicons/react/24/solid";

export const ColorSchemeToggle = () => {
  const [lightScheme, setLightScheme] = useColorScheme()

  const onLightChange = () => {
    setLightScheme((prevState: LightScheme) => {
      return prevState === LightScheme.LIGHT ? LightScheme.DARK : LightScheme.LIGHT
    })

  }

  return (
    <Switch
      checked={lightScheme === LightScheme.DARK}
      onChange={onLightChange}
      className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:ring-primary focus:ring-2 focus:color-primary focus:ring-offset-2 focus:outline-hidden data-checked:bg-primary"
    >
      <span className="sr-only">Use setting</span>
      <span className="pointer-events-none relative inline-block size-5 transform rounded-full bg-white ring-0 shadow-sm transition duration-200 ease-in-out group-data-checked:translate-x-5">
        <span
          aria-hidden="true"
          className="absolute inset-0 flex size-full items-center justify-center transition-opacity duration-200 ease-in group-data-checked:opacity-0 group-data-checked:duration-100 group-data-checked:ease-out"
        >
          <SunIcon className="text-primary"/>
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 flex size-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out group-data-checked:opacity-100 group-data-checked:duration-200 group-data-checked:ease-in"
        >
          <MoonIcon className="text-primary"/>
        </span>
      </span>
    </Switch>
  );
};

export default ColorSchemeToggle