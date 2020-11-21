import React, { useRef, useEffect, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import "./Lines.css"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(MotionPathPlugin)

const Lines = ({ path, isEven, isFirst }) => {
  const pathRef = useRef(null)
  const circleRef = useRef(null)

  const Circle = React.forwardRef((props, ref) => {
    if (isFirst) {
      return (
        <circle
          ref={ref}
          className="circle"
          cx="0"
          cy="5"
          r="5"
          fill="#D63E3D"
        />
      )
    } else if (isEven) {
      return (
        <circle
          ref={ref}
          className="circle"
          cx="6"
          cy="7"
          r="5"
          fill="#D63E3D"
        />
      )
    } else {
      return (
        <circle
          ref={ref}
          className="circle"
          cx="611"
          cy="7"
          r="5"
          fill="#D63E3D"
        />
      )
    }
  })

  const initAnimation = useCallback(() => {
    gsap
      .timeline({})
      .fromTo(
        pathRef.current,
        { strokeDashoffset: isFirst ? 505 : 810 },
        {
          scrollTrigger: {
            trigger: pathRef.current,
            toggleActions: "restart, pause, reverse, pause",
            scrub: 0.5,
            start: isFirst ? "top 26%" : "top 50%",
            end: "bottom",
          },
          strokeDashoffset: 0,
        }
      )
      .to(circleRef.current, {
        scrollTrigger: {
          trigger: pathRef.current,
          toggleActions: "restart, pause, reverse, pause",
          scrub: 0.5,
          start: isFirst ? "top 26%" : "top 50%",
          end: "bottom ",
        },
        motionPath: {
          path: pathRef.current,
          align: pathRef.current,
          alignOrigin: [0.5, 0.5],
        },
      })
  }, [isFirst])

  useEffect(() => {
    initAnimation()
  }, [initAnimation])

  return (
    <div className="lines">
      <svg
        id="lines"
        width={isFirst ? "311" : "617"}
        height={isFirst ? "215" : "217"}
        viewBox={isFirst ? "0 0 311 215" : "0 0 617 217"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path className="p-line p-line-01" d={path} />
        <path
          ref={pathRef}
          className={`p-line p-line-02`}
          strokeDasharray={isFirst ? 505 : 810}
          d={path}
        />
        <path className="p-line p-line-03" d={path} />
        <Circle ref={circleRef} />
      </svg>
    </div>
  )
}

export default Lines
