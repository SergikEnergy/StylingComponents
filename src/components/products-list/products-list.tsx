import { ProductItemType } from '@src/types/api';
import { FC } from 'react';
import { ProductCard } from '../product-card';

import './_product-list.scss';

type ProductsListProps = {
    products: ProductItemType[];
};

export const ProductsList: FC<ProductsListProps> = ({ products }) => (
    <div className='cards__wrapper'>
        {products.map((product) => (
            <ProductCard key={product.id} {...product} />
        ))}
    </div>
);
