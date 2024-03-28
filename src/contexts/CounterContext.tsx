import React, { ReactNode, createContext, useContext, useState } from "react";

interface CounterContextType {
    counter: number;
    increaseCounter: () => void;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    return (
        <CounterContext.Provider value={{ counter, increaseCounter }}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = () => {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error("useCounter must be used within a CounterProvider");
    }
    return context;
};