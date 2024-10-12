import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)

const Provider = ({ children }) => {

    const [user, setUser] = useState(null);





    useEffect(() => {
        // Retrieve user from localStorage when the component mounts
        const userJSON = localStorage.getItem('userInfo');
        if (userJSON) {
          const userData = JSON.parse(userJSON);
          setUser(userData);
        }
      }, []);

      
    const logout = async () => {
        localStorage.removeItem('access-token');
        localStorage.removeItem('userInfo');
        setUser(null)

    }

    const saveUser = (user) => {
        setUser(user);
        localStorage.setItem('userInfo', JSON.stringify(user));
      };


    return (
        <AuthContext.Provider value={{ user, setUser, logout, saveUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;