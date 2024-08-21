import { FC, PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { LoaderContext } from './loader-context';

export const LoaderContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    const changeLoading = useCallback((newValue: boolean) => setIsLoading(newValue), []);

    const value = useMemo(
        () => ({
            isLoading,
            setIsLoading: changeLoading,
        }),
        [isLoading],
    );

    return <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>;
};
