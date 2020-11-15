import React from "react"
import Service from "../Service/Service"
import services from "../../constans/services"
import "./Services.css"

const Services = () => {
  return (
    <section>
      {services.map(service => {
        const { id, icon, title, text } = service
        return <Service title={title} text={text} icon={icon} key={id} />
      })}
    </section>
  )
}

export default Services
