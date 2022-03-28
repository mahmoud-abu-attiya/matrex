import React from 'react'
// import logo from "../../images/MATREX-logo.png"
// import videoOne from "../../videos/video-3.mp4"
import Clock from './Clock/Clock'
import "./Header.scss"

const Headre = () => {
  return (
    <header className='container'>
      {/* <div className="layout"></div>
      <div className="video">
        <video src={videoOne} autoPlay loop muted />
      </div> */}
      <Clock />
    </header>
  )
}

export default Headre