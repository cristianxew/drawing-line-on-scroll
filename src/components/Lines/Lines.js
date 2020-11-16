import React from "react"
import "./Lines.css"

const Lines = () => {
  return (
    <svg
      id="lines"
      className="dashed"
      width="610"
      height="176"
      viewBox="0 0 761 176"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="p-line p-line--fill p-line--fill-1"
        d="M1 0V89.6834H760V176"
        stroke="#DB2727"
      />
      <path
        className="p-line p-line--fill p-line--fill-2 js-line--fill"
        d="M1 0V89.6834H760V176"
        stroke="#DB2727"
      />
      <path
        className="p-line p-line--dashed"
        d="M1 0V89.6834H760V176"
        stroke="#DB2727"
      />
    </svg>
  )
}

export default Lines
