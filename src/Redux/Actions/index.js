import axios from 'axios';

export function getBTCPrice(payload) {
    return async function(dispatch) {
        const response = await axios.get('https://api.exchange.ripio.com/api/v1/rate/BTC_ARS/');
        return dispatch({
            type: 'GET_BTC_PRICE',
            payload: response.data,
        })
    }
};

export function getFees(payload) {
    return async function(dispatch) {
        const response = await axios.get('https://bitcoinfees.earn.com/api/v1/fees/recommended');
        return dispatch({
            type: 'GET_FEES',
            payload: response.data,
        })
    }
};


export function connectWallet(payload) {
    return async function(dispatch) {
        return dispatch({
            type: 'CONNECT_WALLET',
            payload: payload
        })
    }
};

export function disconnectWallet() {
        return async function(dispatch) {
            return dispatch({
                type: 'DISCONNECT_WALLET',
        })
    } 
};

export function sendBTC(payload) {
    return async function(dispatch) {
        return dispatch({
            type: 'SEND_BTC',
            payload: payload
    })
    } 
};

export function findDetails(payload) {
    return async function(dispatch) {
        return dispatch({
            type: 'FIND_DETAILS',
            payload: payload
    })
} 
};


