import React from "react"
import Layout from "../components/Layout/layout"
import Services from "../components/Services/Services"
import MainHeader from "../components/MainHeader/MainHeader"

export default function Home() {
  return (
    <Layout>
      <MainHeader />
      <Services />
    </Layout>
  )
}
