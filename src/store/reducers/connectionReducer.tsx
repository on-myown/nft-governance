import * as ActionTypes from '../constants'

const initialState = {
  ethAddress: null,
}

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_ETH_ADDRESS:
      return {
        ...state,
        ethAddress: action.ethAddress,
      }
    default:
      return state
  }
}
