import { createContext } from 'react';

type LoaderContextType = {
    isLoading: boolean;
    startLoading: () => void;
    stopLoading: () => void;
};

const initialContext: LoaderContextType = {
    isLoading: false,
    startLoading: () => {},
    stopLoading: () => {},
};

export const LoaderContext = createContext<LoaderContextType>(initialContext);
