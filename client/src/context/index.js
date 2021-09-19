import { createContext,useState,useMemo } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        isAuthenticated: false,
        id: '',
        token: '',
    })
    const value = useMemo(() => ({user,setUser}), [user])
    return(
        <UserContext.Provider value={value} >       
            {children}  
        </UserContext.Provider> 
    );
}
