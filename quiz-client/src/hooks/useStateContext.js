import React, { createContext, useContext, useState } from "react";

export const stateContext = createContext();

const getNewContext = () => {
    return {
        participantId: 0,
        timeTaken: 0,
        selectedOptions: [],
    };
};

export default function useStateContext() {
    const { context, setContext } = useContext(stateContext);
    return {
        context,
        setContext: (obj) => {
            setContext({ ...context, ...obj });
        },
    };
}

export function ContextProvider({ children }) {
    const [context, setContext] = useState(getNewContext());

    return (
        <stateContext.Provider value={{context, setContext}}>
            {children}
        </stateContext.Provider>
    );
}
