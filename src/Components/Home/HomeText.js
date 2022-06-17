import React from 'react'
import HomeHero from '../Utils/Img/home-hero.svg'

const HomeText = () => {
  return (
    <div className="container-home">
        <div className="container-text-home">
            <h1>The moon is made of pancakes.</h1>
            <h2>Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.</h2>
        </div>
            <img src={HomeHero} alt="imgprincipal" />
    </div>
  )
}

export default HomeText;