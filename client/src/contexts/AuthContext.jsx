
/* Este archivo va a tener toda la lógica referente a la gestión
de la autenticación del usuario dentro de la APP.
*/

import {createContext, useCallback, useContext, useMemo, useState} from 'react';

/* createContext() proporciona un objeto que tiene en su interior
un componente llamado "provider", que será aquel con el que debemos
encerrar en App.js todos los componentes con los cuales queramos
que consuman el valor del contexto que generamos.
*/
export const AuthContext = createContext();

/* En "children" vendrán todos los componentes que queramos que
puedan consumir el contexto */
function AuthContextProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem("token") ?? false
    );

    const login = useCallback(function () {
        setIsAuthenticated(true);
    }, []);

    const logout = useCallback(function () {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    }, []);

    const value = useMemo(() => ({
        login,
        logout,
        isAuthenticated
    }),
    [login, logout, isAuthenticated]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
    return useContext(AuthContext);
}

export default AuthContextProvider;
