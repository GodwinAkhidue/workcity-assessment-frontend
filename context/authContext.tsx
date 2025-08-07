'use client';
import { createContext, useContext, useState } from 'react';

const UserContext = createContext<any>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    //global user state management
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
