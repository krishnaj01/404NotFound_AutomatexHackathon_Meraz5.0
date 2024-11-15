import { createContext, useContext, useState } from "react";
export const countContext = createContext();
export const useCountContext = () => {
    return useContext(countContext);
}
export const CountContextProvider = ({ children }) => {
    const [lostCount, setLostCount] = useState(JSON.parse(localStorage.getItem("lost")) || 0);
    const [foundCount, setFoundCount] = useState(JSON.parse(localStorage.getItem("found")) || 0);
    return (
        <countContext.Provider value={{ lostCount, setLostCount, foundCount, setFoundCount }}>{children}</countContext.Provider>
    );
};
