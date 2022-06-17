
const initialState = {
    userConnected: null,
    balance: 0,
    history: [],
    detailTransactions: [],
    show: false,
    bitcoinPrice : null,
    feePrice: null
}

function rootReducer(state=initialState, action) {
    switch(action.type) {
        case 'CONNECT_WALLET':
            return {
                ...state,
                userConnected :  action.payload.wallet,
                balance: action.payload.balance
            }
        case 'DISCONNECT_WALLET':
                return {
                ...state,
                userConnected: null,
            }
        case 'SET_SHOW_VISIBLE':
                return {
                ...state,
                show: true,
            }
        case 'SET_SHOW_HIDDEN':
                return {
                ...state,
                show: false,
            }
        case 'SEND_BTC':
                return {
                ...state,
                history: [...state.history, action.payload],
                balance: (action.payload.amount - state.balance) * -1,
            }
        case 'FIND_DETAILS':
                const historyCopy = state.history;
                var detailbyId = historyCopy?.filter((el) => el.idTransaction == action.payload);
                return {
                    ...state,
                    detailTransactions: detailbyId,
            }
        case 'GET_BTC_PRICE':
            return {
                ...state,
                bitcoinPrice: action.payload.last_price
            }
        case 'GET_FEES':
            return {
                ...state,
                feePrice: action.payload.fastestFee
            }
        default: return state;
    }
}

export default rootReducer;

