import './Modal.css';
import PancakeIcon from '../../Utils/Img/pancakeswap-logo.png'; 
import { useSelector, useDispatch} from 'react-redux';
import { connectWallet } from '../../Redux/Actions';
import { useState } from 'react';

const Modal = () => {

  const show = useSelector((state) => state.show);
  const [userInfo, setUserInfo] = useState({
      wallet: '',
      balance: 1000000
  })
  
  const dispatch = useDispatch();
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  
  const handleClose = () => {
    return dispatch({
        type: 'SET_SHOW_HIDDEN'
    })
  };

  const connectWalletFunction = (e) => {
    e.preventDefault();
    dispatch(connectWallet(userInfo))
    handleClose();
    setUserInfo({
        ...userInfo,
        wallet : ''
    })
  };

  const handleChange = (e) => {
    setUserInfo({
        ...userInfo,
        [e.target.name] : e.target.value
    })
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div classname="containerSection">
          <p className="pModal">Connect your Wallet</p>
          <img className="img-icon" src={PancakeIcon} alt="icon"></img>
          <form onSubmit={(e) => connectWalletFunction(e)}>
          <label className="Label">Address</label>
          <input onChange={handleChange} type="text" value={userInfo.wallet} name="wallet" placeholder="0x0000000"></input>
          <button disabled={userInfo.wallet.length <= 0} className="bntConnect" type="submit" onClick={handleClose}>
              Connect
          </button>
          </form>
          <button className="btnClose" type="button" onClick={handleClose}>
              Close
          </button>
        </div>
      </section>
    </div>
  );
};

export default Modal;