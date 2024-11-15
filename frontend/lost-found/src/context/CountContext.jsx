import { createContext, useContext, useState } from "react";
export const CountContext = createContext();
export const useCountContext = () => {
    return useContext(CountContext);
}
export const CountContextProvider = ({ children }) => {
    const [lostCount, setLostCount] = useState(JSON.parse(localStorage.getItem("lost")) || 0);
    const [foundCount, setFoundCount] = useState(JSON.parse(localStorage.getItem("found")) || 0);
    return (
        <CountContext.Provider value={{ lostCount, setLostCount, foundCount, setFoundCount }}>{children}</CountContext.Provider>
    );
};