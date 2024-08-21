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
    const { setIsLoading } = useLoaderContext();

    useEffect(() => {
        if (!isMount) return;
        let timerId: TimeoutId;

        const fetchProducts = async () => {
            try {
                setIsError(false);

                const data = await fetch(API_URL);
                const dataToJSON = await data.json();
                console.log(dataToJSON);

                setProducts(dataToJSON);
            } catch (err: unknown) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        setIsLoading(true);
        //задержка искуственная
        timerId = setTimeout(() => fetchProducts(), 2000);

        return () => {
            clearTimeout(timerId);
        };
    }, []);

    return { products, isError };
};
