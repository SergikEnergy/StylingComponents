import { ErrorProducts } from '@src/components/error-products';
import { ProductsList } from '@src/components/products-list';
import { useGetProducts } from '@src/hooks/use-get-progucts';

import './_main-page.scss';

export const MainPage = () => {
    const { isError, products } = useGetProducts();
    return (
        <main className='main__content'>
            <header className='demo__header'>
                <h1 className='demo__header_title'>Демонстрационное приложение</h1>
            </header>
            {!isError && <ProductsList products={products} />}
            {isError && <ErrorProducts />}
        </main>
    );
};
