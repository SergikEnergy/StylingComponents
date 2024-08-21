import './App.css';
import { LoaderContextProvider } from './context/loader-context-provider';
import { MainPage } from './pages/main-page';

export const App = () => {
    return (
        <LoaderContextProvider>
            <MainPage />
        </LoaderContextProvider>
    );
};
