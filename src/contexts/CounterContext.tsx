import React, { ReactNode, createContext, useContext, useState } from "react";
import { CartItemProps } from "../components/cart/CartItem.tsx";

interface CounterContextType {
    counter: number;
    increaseCounter: () => void;
    addToCart: (item: CartItemProps) => void;
    cardItems: CartItemProps[];
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [counter, setCounter] = useState(0);
    const [cardItems, setCardItems] = useState<CartItemProps[]>([]);

    const increaseCounter = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    const addToCart = (item: CartItemProps) => {
        setCardItems(prevItems => {
            const newCartItems = [...prevItems, item];
            console.log("Добавлен товар в корзину:", newCartItems);
            return newCartItems;
        });
    };

    return (
        <CounterContext.Provider value={{ counter, increaseCounter, addToCart, cardItems }}>
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