import React from "react"
import Title from "../Title/Title"
import Circle from "./Circle"

import "./service.css"

const Service = ({ title, text, icon }) => {
  return (
    <section className="section-service">
      <div className="service-icon">
        <i>{icon}</i>
        <Circle />
      </div>
      <article className="service-article">
        <Title title={title} />
        <p className="service-article-text">{text}</p>
      </article>
    </section>
  )
}

export default Service
