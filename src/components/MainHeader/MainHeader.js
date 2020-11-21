import React from "react"
import Title from "../Title/Title"
import Lines from "../Lines/Lines"
import "./MainHeader.css"

const MainHeader = () => {
  return (
    <div className="main-header">
      <Title title="Our Services" styles="big" />
      <p className="main-header-subtitle">We add value and deliver results</p>
      <Lines path="M5 10V117.969H305V210" isFirst={true} />
    </div>
  )
}
export default MainHeader
