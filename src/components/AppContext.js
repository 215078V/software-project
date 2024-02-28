import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [selectedApps, setSelectedApps] = useState([]);

    const addSelectedApp = (appName) => {
        setSelectedApps((prevSelectedApps) => [...prevSelectedApps, appName]);
    };

    return (
        <AppContext.Provider value={{ selectedApps, addSelectedApp }}>
            {children}
        </AppContext.Provider>
    );
};
