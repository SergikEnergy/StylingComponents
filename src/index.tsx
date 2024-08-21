import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';

import './main.scss';
import './index.css';
import { LoaderContextProvider } from './context/loader-context-provider.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <LoaderContextProvider>
            <App />
        </LoaderContextProvider>
    </StrictMode>,
);
