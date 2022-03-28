import React from 'react'
// import videoOne from "../../videos/video-4.mp4"
import Clock from './Clock/Clock'
import Layout from './Layout/Layout'
import "./Header.scss"

const Headre = () => {
  return (
    <header>
      <div className="overlay"></div>
      <Layout />
      <div className="container">
        <Clock />
        <p>Welcome to Matrex wab shop. We promise that you will find here what you are looking for.</p>
      </div>
    </header>
  )
}

export default Headre