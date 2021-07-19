import React, {useState} from "react";
export const DashContext = React.createContext();
export const UserContext = React.createContext();

const Store = ({children}) => {
    const [dash, setDash] = useState(0);
    const [User, setUser] = useState(0);

    return(
        <DashContext.Provider value = {[dash, setDash]}>
            <UserContext.Provider value = {[User, setUser]}> 
            {children}
            </UserContext.Provider>
        </DashContext.Provider>
    )
}

export default Store;