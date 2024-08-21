import { ProductItemType } from '@src/types/api';
import { FC } from 'react';
import classnames from 'classnames';
import rateImg from '../../assets/imgs/rating.png';

import './product-card.scss';

export const ProductCard: FC<ProductItemType> = ({
    category,
    description,
    rating,
    image,
    price,
    title,
}) => (
    <div className='container'>
        <figure className='product__image'>
            <figcaption className='product__image_caption'>{category}</figcaption>
            <img src={image} alt='product image' />
        </figure>
        <div className='overlay'>
            <div className='items'></div>
            <div className={classnames('items', 'head')}>
                <p className='title'>{title}</p>
                <hr />
            </div>
            <div className={classnames('items', 'price')}>
                <p className='new'>Price: {price}</p>
                <p className='rate'>
                    <img className='rate__star' src={rateImg} alt='rate image' />
                    <span className='rate__description'>{rating.rate}</span>
                </p>
            </div>
            <div className={classnames('items', 'description')}>{description}</div>
        </div>
    </div>
);
