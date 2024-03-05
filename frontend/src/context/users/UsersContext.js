import { createContext, useReducer } from "react";
import UsersReducer from "./UsersReducer";
const UsersContext = createContext();
export const UsersProvider = ({children}) => {
    const initialState = {
        user: null,
        profile: null,
        usersList: [],
        loading: false,
    };

    const [state, dispatch] = useReducer(UsersReducer, initialState);
    return <UsersContext.Provider value={{
        ...state,
        dispatch
    }}>
        {children}
    </UsersContext.Provider>
};

export default UsersContext;