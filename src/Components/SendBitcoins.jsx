import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { sendBTC } from '../Redux/Actions';
import MainBTC from '../Utils/Img/store.svg';
import { nanoid } from 'nanoid'

const SendBitcoins = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        from: state.userConnected,
        to: '',
        amount: 0,
        gasPrice: 0.0002,
        status: 'Success',
        idTransaction: 0,
        Date: new Date().toDateString(),
    });

    
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value,
            idTransaction: nanoid(),
            
        })
    };
    
    const handleSend = (e) => {
        e.preventDefault();
        dispatch(sendBTC(input));
        setInput({
            ...input,
            to: '',
            amount: 0,
            gasPrice: 0.0002,
            status: 'Success',
        })
        return toast.success('the money was sent successfully');
    };

  return (
    <div className="containerDivSendBTC">
        <img className="mainImage" src={MainBTC} alt="icon"/>
        <form className="formSendBTC" onSubmit={handleSend}>
            <h3 className="titleSendBTC">New Transaction</h3>
                    <label className="pGasprice">Send To</label>
                    <input className="pGasprice" type="text" name="to" value={input.to} onChange={(e) =>handleChange(e)}/>
                    <label className="pGasprice">Amount in $</label>
                    <input className="pGasprice"type="number" min="1" max="10000000" name="amount" value={input.amount} onChange={(e) =>handleChange(e)}/>
                    <p className="pGasprice">Gas Price: {state.feePrice}</p>
                    <p className="pGasprice">Total: ${(input.amount * 1000 + state.feePrice * 1000) / 1000}</p>
                    <button className="bntConnect" disabled={(input.amount * 1000 + state.feePrice * 1000) / 1000 > state.balance || !input.to.length} type="submit">Send</button>
        </form>
        <Toaster position="bottom-left" reverseOrder={false}/>
    </div>
  )
}

export default SendBitcoins;