import React, { useContext , createContext} from "react";

export const AppContext = createContext();

const ContextProvider = (props)=>{
    const phone = '+923473849584'
    const email =' Developersite@gmail.com'

    return(
        <AppContext.Provider value={{phone ,email}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider