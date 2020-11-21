import React from "react"
import Title from "../Title/Title"
import Lines from "../Lines/Lines"

import "./service.css"

const Service = ({ title, text, icon, isEven }) => {
  return (
    <section className="section-service">
      <div className="service-icon">
        <div className="icon-wrapper">{icon}</div>
      </div>
      <article className="service-article">
        <Title title={title} />
        <p className="service-article-text">{text}</p>
      </article>
      <Lines
        path={isEven ? "M6 12V118.329H612V212" : "M611 12V118.329H5V212"}
        isEven={isEven}
      />
    </section>
  )
}

export default Service
