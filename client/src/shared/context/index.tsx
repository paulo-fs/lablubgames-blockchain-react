import { createContext, ReactNode } from 'react';

interface ProviderPropType{
   children: ReactNode;
}

export const Context = createContext({});

export function ContextProvider({children}: ProviderPropType){
    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    );
}