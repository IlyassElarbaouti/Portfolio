"use client";
import { links } from "@/lib/data";
import type { SectionName } from "@/lib/types";
import React, { createContext, useContext, useState } from "react";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};
type ActivesectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick:number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActivesectionContext = createContext<ActivesectionContextType | null>(
  null
);

const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick,setTimeOfLastClick]=useState(0)
  return (
    <ActivesectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
      {children}
    </ActivesectionContext.Provider>
  );
};
export const useActiveSectionContext=()=>{
  const context= useContext(ActivesectionContext)
if(context === null){
  throw new Error(
    "useActiveSectioncontext must be used within its provider"
  )
}
return context
}


export default ActiveSectionContextProvider;
