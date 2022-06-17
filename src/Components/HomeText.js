import React from 'react'
import HomeImagen from '../Utils/Img/home-hero.svg'

const HomeText = () => {
  return (
    <div className="container-home">
        <div className="container-text-home">
            <h1>The moon is made of pancakes.</h1>
            <h2>Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.</h2>
        </div>
        <img src={HomeImagen} alt="img"/>
    </div>
  )
}

export default HomeText