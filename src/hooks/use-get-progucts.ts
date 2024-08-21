import { useState, useEffect } from 'react';
import { ProductItemType } from '@src/types/api';
import { useFirstRender } from './use-first-render';
import { API_URL } from '@constants/api';
import { useLoaderContext } from './use-loader-context';
import { TimeoutId } from '@src/types/common';

export const useGetProducts = () => {
    const [products, setProducts] = useState<ProductItemType[]>([]);
    const [isError, setIsError] = useState(false);
    const isMount = useFirstRender();
    const { startLoading, stopLoading } = useLoaderContext();

    useEffect(() => {
        if (!isMount) return;
        let timerId: TimeoutId;

        const fetchProducts = async () => {
            try {
                setIsError(false);
                startLoading();

                //искусственная задержка для лоадера
                timerId = setTimeout(async () => {
                    const data = await fetch(API_URL);
                    const dataToJSON = await data.json();
                    if (Array.isArray(dataToJSON)) {
                        setProducts(dataToJSON);
                    }
                }, 3000);
            } catch (err: unknown) {
                setIsError(true);
            } finally {
                stopLoading();
            }
        };

        fetchProducts();

        return () => {
            if (timerId) clearTimeout(timerId);
        };
    }, []);

    return { products, isError };
};
