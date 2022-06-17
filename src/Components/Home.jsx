import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Modal from './Modal/Modal.js';
import NavBar from './NavBar.jsx';
import SendBitcoins from './SendBitcoins.jsx';
import UserConnected from './UserConnected.js';
import HomeText from './HomeText.js'
import { getBTCPrice, getFees } from '../Redux/Actions/index.js';


const Home = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    
    useEffect(() => {
      dispatch( getBTCPrice() );
    }, [dispatch]);

    useEffect(() => {
      dispatch( getFees() );
    }, [dispatch]);

    const hideModal = () => {
        return dispatch({
            type: 'SET_SHOW'
        })
    };

  return (
    <div>
        <NavBar />
        { state.userConnected && state.userConnected ?
            <div>
              <UserConnected /> 
              <SendBitcoins />
            </div>
          : <HomeText />
        }
        <Modal show={state.show} handleClose={hideModal} />
    </div>
  )
}

export default Home;