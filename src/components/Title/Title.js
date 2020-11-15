import React from "react"
import "./title.css"

const Title = ({ title, styles }) => {
  return (
    <>
      <h1 className={`title ${styles ? styles : ""}`}>{title}</h1>
    </>
  )
}

export default Title
