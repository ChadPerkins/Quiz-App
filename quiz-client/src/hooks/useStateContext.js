import React, { createContext, useContext, useEffect, useState } from "react";

export const stateContext = createContext();

// Set up local storage to save the new context
const getNewContext = () => {
    if (localStorage.getItem("context") === null) {
        localStorage.setItem(
            "context",
            JSON.stringify({
                participantId: 0,
                timeTaken: 0,
                selectedOptions: [],
            })
        );
    }
    return JSON.parse(localStorage.getItem("context"));
};

export default function useStateContext() {
    const { context, setContext } = useContext(stateContext);
    return {
        context,
        setContext: (obj) => {
            setContext({ ...context, ...obj });
        },
        resetContext: () => {
            localStorage.removeItem('context')
            setContext(getNewContext())
        }
    };
}

export function ContextProvider({ children }) {
    const [context, setContext] = useState(getNewContext());

    // Update the local storage with the new context info
    useEffect(() => {
        localStorage.setItem("context", JSON.stringify(context));
    }, [context]);

    return (
        <stateContext.Provider value={{ context, setContext }}>
            {children}
        </stateContext.Provider>
    );
}
