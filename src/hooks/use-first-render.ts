import { useRef } from 'react';

export const useFirstRender = () => {
    const isMount = useRef(true);
    if (isMount.current) {
        isMount.current = false;
        return true;
    }
    return false;
};
