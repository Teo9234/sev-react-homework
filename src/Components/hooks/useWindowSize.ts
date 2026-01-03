import { useState, useEffect } from 'react';
import {type SizeProps} from '../../types.ts';

const useWindowSize = (): SizeProps => {
    const isClient = typeof window !== 'undefined';

    const getSize = (): SizeProps => ({
        width: isClient ? window.innerWidth : 0,
        height: isClient ? window.innerHeight : 0,
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

    return size;
}

export default useWindowSize;
