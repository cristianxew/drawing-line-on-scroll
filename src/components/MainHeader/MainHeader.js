import React from "react"
import Title from "../Title/Title"
import "./MainHeader.css"
import Circle from "../Service/Circle"

const MainHeader = () => {
  return (
    <div className="main-header">
      <Title title="Our Services" styles="big" />
      <p className="main-header-subtitle">We add value and deliver results</p>
      <Circle />
    </div>
  )
}
export default MainHeader
