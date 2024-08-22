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
    onCloseError?: () => void;
};

export const MainPage: FC<MainPageProps> = ({ isError, products, onCloseError }) => {
    const { isLoading } = useLoaderContext();
    return isLoading ? (
        <Loader />
    ) : (
        <main className='main__content'>
            <header className='demo__header'>
                <h1 className='demo__header_title'>Demo styling components</h1>
            </header>
            {!isError && <ProductsList products={products} />}
            {isError && (
                <ErrorProducts
                    message='Произошла ошибка получения товаров. Пожалуйста, попробуйте повторить запрос позже'
                    onClose={onCloseError}
                />
            )}
        </main>
    );
};
