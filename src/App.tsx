import { MainPage } from './pages/main-page';

import './App.css';
import { useGetProducts } from './hooks/use-get-progucts';

export const App = () => {
    const { isError, products, closeError } = useGetProducts();

    return <MainPage isError={isError} products={products} onCloseError={closeError} />;
};
