import { useEffect, useState, useRef, useCallback } from "react"

const useScroll = () => {
  const [point, setPoint] = useState(false)
  const element = useRef(null)

  const handleScroll = useCallback(() => {
    if (element.current) {
      window.scrollY > 500 ? setPoint(true) : setPoint(false)
      console.log(point)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [handleScroll])

  return { point, element }
}

export default useScroll
