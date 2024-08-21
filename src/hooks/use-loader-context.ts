import { useContext } from 'react';

import { LoaderContext } from '@src/context/loader-context';

export const useLoaderContext = () => useContext(LoaderContext);
