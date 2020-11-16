import React from "react"
import Title from "../Title/Title"
import Circle from "./Circle"
import Lines from "../Lines/Lines"

import "./service.css"

const Service = ({ title, text, icon }) => {
  return (
    <section className="section-service">
      <div className="service-icon">
        <div className="icon-wrapper">{icon}</div>
        <Circle />
      </div>
      <article className="service-article">
        <Title title={title} />
        <p className="service-article-text">{text}</p>
      </article>
      <Lines />
    </section>
  )
}

export default Service
