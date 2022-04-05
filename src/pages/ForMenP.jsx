import React from 'react'
import ProductCard from '../components/ProductCard/ProductCard'

const ForMenP = () => {
  let temp = [] 
  for (let i = 1; i < 10;i++){
    temp.push(<li>{i}</li>)
  }
  return (
    <>
      <h2>Watche for men</h2>
      {Array(8).map(()=>{
        return (
          <ProductCard />
        )
      })}
      {temp}
    </>
  )
}

export default ForMenP