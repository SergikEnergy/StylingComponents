import { ErrorProducts } from '@src/components/error-products';
import { ProductsList } from '@src/components/products-list';

import './main-page.scss';
import { FC } from 'react';
import { ProductItemType } from '@src/types/api';
import { useLoaderContext } from '@src/hooks/use-loader-context';
import { Loader } from '@src/components/loader';

type MainPageProps = {
    isError: boolean;
    products: ProductItemType[];
};

export const MainPage: FC<MainPageProps> = ({ isError, products }) => {
    const { isLoading } = useLoaderContext();
    console.log(isLoading);
    return isLoading ? (
        <Loader />
    ) : (
        <main className='main__content'>
            <header className='demo__header'>
                <h1 className='demo__header_title'>Демонстрационное приложение</h1>
            </header>
            {!isError && <ProductsList products={products} />}
            {isError && <ErrorProducts />}
        </main>
    );
};
