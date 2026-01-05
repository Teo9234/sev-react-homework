import { useState, useEffect } from 'react';
import {type SizeProps} from '../../types.ts';

const useWindowSize = (): SizeProps => {
    const isClient = typeof window !== 'undefined';

    const getSize = (): SizeProps => ({
        width: isClient ? window.outerWidth : 0,
        height: isClient ? window.outerHeight : 0,
    });

    const [size, setSize] = useState<SizeProps>(getSize);

    useEffect(() => {
        if (!isClient) return;

        const onResize = () => setSize(getSize());
        window.addEventListener('resize', onResize);
        // ensure correct value on mount
        onResize();
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const isSquare = size.width === size.height;

    return { ...size, isSquare };
}

export default useWindowSize;
