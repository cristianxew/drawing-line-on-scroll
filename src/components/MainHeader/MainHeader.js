import React from "react"
import Title from "../Title/Title"
import Circle from "../Service/Circle"
//import Lines from "../Lines/Lines"
import "./MainHeader.css"

const MainHeader = () => {
  return (
    <div className="main-header">
      <Title title="Our Services" styles="big" />
      <p className="main-header-subtitle">We add value and deliver results</p>
      <Circle />
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
          d="M1 0V95H490V192"
          stroke="#DB2727"
        />
        <path
          className="p-line p-line--fill p-line--fill-2 js-line--fill"
          d="M1 0V95H490V192"
          stroke="#DB2727"
        />
        <path
          className="p-line p-line--dashed"
          d="M1 0V95H490V192"
          stroke="#DB2727"
        />
      </svg>
    </div>
  )
}
export default MainHeader
