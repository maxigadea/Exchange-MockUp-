import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PancakeIcon from '../Utils/Img/pancakeswap-logo.png'; 
import NavBar from './NavBar';


const History = () => {
  const state = useSelector((state) => state)
  return (
    <> 
      <NavBar />
      <div className="historyContainer">
        <Link to="/"> <img className="img-icon" src={PancakeIcon} alt="icon"></img> </Link>
        {state.history.length > 0 ? 
          state.history.map((el,i) => {
            return (
            <div className="cardContainer" key={i}>
                <label className="label-history">- Transaction To:</label>
                <p>{el.to}</p>
                <label>- Amount:</label>
                <p>${el.amount}</p>
                <Link className="bntConnect" to={'/transaction/' + el.idTransaction}>Go to detail</Link>
            </div>
            )
          })
          : 
          <div className="errorContainer">
              <h2>Nothing to see here, make a transaction first!</h2>
              <Link className="bntConnect" to="/">New transaction</Link>
          </div>
        }
      </div>
    </>
  )
}

export default History;