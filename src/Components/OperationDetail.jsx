import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { findDetails } from '../Redux/Actions';
import { Link } from 'react-router-dom';
import PancakeIcon from '../Utils/Img/pancakeswap-logo.png'; 
import NavBar from './NavBar';

const OperationDetail = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const detailById = useSelector((state) => state.detailTransactions)
  const userConnected = useSelector((state) => state.userConnected)

  useEffect(() => {
    dispatch( findDetails(id) );
  }, []);


  return (
    <>
    <NavBar />
    <div className="containerDetail">
        <Link to="/transactions"> <img className="img-icon" src={PancakeIcon} alt="icon"></img> </Link>     
       {userConnected && detailById.length > 0 
        ? 
        detailById?.map((el) => {
          return (
              <div className="cardContainerdetail" key={el.idTransaction}>
                <p className="p-detailtext">Transaction Detail</p>
                <div className="insideContainer">
                <label>Transaction To</label>
                <p>{el.to}</p>
                </div>
                <div className="insideContainer">
                <label>Amount sent</label>
                <p>${el.amount}</p>
                </div>
                <div className="insideContainer">
                <label>Transaction Date</label>
                <p>{el.Date}</p>
                </div>
                <div className="insideContainer">
                <label>Transaction gasPrice</label>
                <p>{el.gasPrice}</p>
                </div>
                <div className="insideContainer">
                <label>Status</label>
                <p>{el.status}</p>
                </div>
                <div className="insideContainer">
                <label>Transaction ID</label>
                <p>{el.idTransaction}</p>
                </div>
                <button className="bntConnect" type="click">Go to etherscan</button>
              </div>
          )})
        :
        <div>
          'Connect your wallet'
        </div>
      }
    </div>
    </>
  )
}

export default OperationDetail;