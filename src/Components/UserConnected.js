import React from 'react';
import PancakeIcon from '../Utils/Img/pancakeswap-logo.png';
import css from '../Css/Index.css';
import { useSelector } from 'react-redux';


const UserConnected = () => {

    const state = useSelector((state) => state)
  return (
    <div className="container-user">
        { state.userConnected ? 
            <div className="user-connected">
                <img className="img-icono" src={PancakeIcon} alt='perfilicon'></img>
              <div className="header-user">
                <p>Connected with <span>{state.userConnected}</span></p> 
                <p>Your balance is <span>{state.balance}</span>ARS</p>
                <p>Your balance is <span>{(state.balance / state.bitcoinPrice).toFixed(4)}</span>BTC</p>
              </div>
            </div>
        : state.userConnected
        }
    </div>
  )
}

export default UserConnected;