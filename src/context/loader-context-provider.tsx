import { FC, PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { LoaderContext } from './loader-context';

export const LoaderContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    const startLoading = useCallback(() => setIsLoading(true), []);
    const stopLoading = useCallback(() => setIsLoading(false), []);

    const value = useMemo(
        () => ({
            isLoading,
            startLoading,
            stopLoading,
        }),
        [isLoading, startLoading, stopLoading],
    );

    return <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>;
};
