import React from 'react'
import ForMen from '../components/ForMen/ForMen'
import ForWomen from '../components/ForWomen/ForWomen'
import Headre from '../components/Header/Headre'
import Offer from '../components/Offer/Offer'
// import Navbar from '../components/Navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Headre />
      <Offer />
      <ForMen />
      <ForWomen />
    </div>
  )
}

export default Home