import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { disconnectWallet } from '../Redux/Actions';
import {Link, useNavigate} from "react-router-dom";
import BTCIcon from '../Utils/Img/bitcoin.jpg';

const NavBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state) => state);

    const connectWalletFunction = () => {
        navigate("/")
        dispatch({
            type: 'SET_SHOW_VISIBLE'
        }) 
    };

    const disconnectWalletFunction = () => {
        dispatch(disconnectWallet())
    };
    

  return (
       <div className="containerNav">
           <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">NFT</Link></li>
                <li><Link to="/">Earn</Link></li>
                <li><Link to="/">Trade</Link></li>
                <li><Link to={state.userConnected ? "/transactions" : "/"}>Transactions</Link></li>
                <Link className="bitcoinPrice" to="/"><img className="BtcIcon" src={BTCIcon} alt="btc" /></Link>
                <p className="bitcoinPriceP">${state.bitcoinPrice}</p>
                {state.userConnected ? 
                <button className="buttonWallet" onClick={() =>disconnectWalletFunction()}> Disconnect Wallet </button> 
                :
                <button className="buttonWallet" onClick={() =>connectWalletFunction()}> Connect Wallet </button>
                }
           </ul>
       </div>
    
  )
}

export default NavBar