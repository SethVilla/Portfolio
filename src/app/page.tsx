"use client";

import dynamic from "next/dynamic";

const ColorToggle = dynamic(
    () => {
        return import("./shared/toggles/ColorSchemeToggle")
    },
    { ssr: false }
);

export default function Home() {
  return (
    <div className="grid grid-cols-12 sm:h-full">
        <div className="col-start-9 col-end-10 mt-4 text-right">
            <ColorToggle />
        </div>
      <div className="col-start-4 col-end-10 m-auto h-full w-full">
        <p className="text-primary text-4xl font-sans">Seth</p>
      </div>
    </div>
  );
}
