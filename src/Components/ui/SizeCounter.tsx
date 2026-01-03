import useWindowSize from '../hooks/useWindowSize';

const SizeCounter = () => {

    const { width, height } = useWindowSize()

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 , marginTop: 16, alignItems: 'middle' }}>
                <div>Width: {width}px</div>
                <div>Height: {height}px</div>
            </div>
        </>
    )
}

export default SizeCounter;