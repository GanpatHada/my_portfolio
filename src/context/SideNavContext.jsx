import { createContext, useState } from "react";

export const SideNavContext=createContext(null);

const SideNavProvider=({children})=>{
    const[sideNav,setSideNav]=useState(false);
    return (
        <SideNavContext.Provider value={{sideNav,setSideNav}}>
            {children}
        </SideNavContext.Provider>
    )
}
export default SideNavProvider;