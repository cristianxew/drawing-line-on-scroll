import React from "react"
import Title from "../Title/Title"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrap">
        <div className="footer-content">
          <Title title="let's work together" styles="white-circle" />
          <p className="footer-pargh">
            we are full service which means we have got you covered on design
            and content right through.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
