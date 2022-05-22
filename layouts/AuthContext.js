import React, { createContext, useEffect, useState } from 'react';
import { Storage } from '@capacitor/storage';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        getAuthenticated()
    }, [])

    const getAuthenticated = async () => {
        const accessToken = await Storage.get({key: 'accessToken'})
        if(accessToken.value) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    }

    return (
        <React.Fragment>
            <AuthContext.Provider value={{loggedIn, setLoggedIn}} >
                {props.children}
            </AuthContext.Provider>
        </React.Fragment>
    )
}

export default AuthContextProvider;