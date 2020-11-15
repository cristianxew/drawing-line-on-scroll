import React from "react"
import Footer from "../Footer/Footer"
import BrandSlider from "../Slider/Slider"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <main className="main-container">{children}</main>
      <BrandSlider />
      <Footer />
    </>
  )
}

export default Layout
