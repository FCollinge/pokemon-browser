"use client";
import {SWRConfig} from "swr";
import {localStorageProvider} from "@/lib/caching/localStorageProvider";

export default function SWRProvider({children}: {children: React.ReactNode}) {
  return (
    <SWRConfig value={{provider: localStorageProvider}}>
      {children}
    </SWRConfig>
  );
}