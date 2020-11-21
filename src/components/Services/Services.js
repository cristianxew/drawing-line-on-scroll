import React from "react"
import Service from "../Service/Service"
import services from "../../constans/services"
import "./Services.css"

const Services = () => {
  return (
    <section>
      {services.map(service => {
        return <Service key={service.id} {...service} />
      })}
    </section>
  )
}

export default Services
