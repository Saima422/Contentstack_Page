import { useState } from "react";
import { useContext } from "react";

const { createContext } = require("react");

export const toggleContext = createContext();

export function useToggleContext(){
    return useContext(toggleContext);
}

export function ToggleContextProvider({children}){

    const [sideBar, setSideBar] = useState(false);

    const set_side_Bar = (data) => {
        setSideBar(data);
    }

    return (
        <toggleContext.Provider value={{sideBar: sideBar, set_side_Bar: set_side_Bar}}>
            {children}
        </toggleContext.Provider>
    )
}