import React, { createContext, useContext, useState } from 'react';

type QuantityContextProps = {
    quantityArray: string[],
    setQuantityArray: React.Dispatch<React.SetStateAction<string[]>>,
};

const QuantityContext = createContext<QuantityContextProps>({
    quantityArray: [], setQuantityArray: () => { }
});

type QuantityProviderProps = {
    children: React.ReactElement
};

export const QuantityProvider = ({ children }: QuantityProviderProps) => {
    let [quantityArray, setQuantityArray] = useState<string[]>([]);
    return (
        <QuantityContext.Provider value={
            {
                quantityArray, setQuantityArray
            }
        }>
            {children}
        </QuantityContext.Provider>
    );
};

export const useQuantityContext = (): QuantityContextProps => useContext(QuantityContext);
