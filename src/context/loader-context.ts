import { createContext } from 'react';

type LoaderContextType = {
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
};

const initialContext: LoaderContextType = {
    isLoading: false,
    setIsLoading: () => {},
};

export const LoaderContext = createContext<LoaderContextType>(initialContext);
