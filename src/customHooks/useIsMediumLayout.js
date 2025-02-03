import { useCallback, useEffect, useState } from 'react'


export default function useIsMediumLayout(width = 1240) {
    const getIsMediumLayout = useCallback(() => {
        return window.innerWidth < width
    }, [width])

    const [isMediumLayout, setIsMediumLayout] = useState(getIsMediumLayout())

    useEffect(() => {
        const onResize = () => setIsMediumLayout(getIsMediumLayout())

        window.addEventListener("resize", onResize)
        return () => {
            window.removeEventListener("resize", onResize)
        }
    }, [getIsMediumLayout])

    return isMediumLayout
}
