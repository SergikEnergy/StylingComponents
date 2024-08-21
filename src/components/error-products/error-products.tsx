import { FC, ReactNode } from 'react';

import './error-products.scss';

type ErrorProductsProps = {
    message: ReactNode;
    onClose?: () => void;
};

export const ErrorProducts: FC<ErrorProductsProps> = ({ message, onClose }) => {
    return (
        <div className='error-alert'>
            <div className='error-alert__content'>
                <span className='error-alert__icon'>⚠️</span>
                <p className='error-alert__message'>{message}</p>
            </div>
            {onClose && (
                <button className='error-alert__close' onClick={onClose}>
                    &times;
                </button>
            )}
        </div>
    );
};
