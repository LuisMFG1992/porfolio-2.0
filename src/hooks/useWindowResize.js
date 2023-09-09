import { useEffect, useState } from 'react'

export function useWindowResize() {
  const [windowResize, setWindowResize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function handelWindowSize() {
      setWindowResize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handelWindowSize)

    handelWindowSize()

    return () => {
      window.removeEventListener('resize', handelWindowSize)
    }
  }, [])

  return windowResize
}
