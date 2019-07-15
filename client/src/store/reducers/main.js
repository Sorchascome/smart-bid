import {SEND_EMAIL} from '../actions/constants'

const mainReducer = (state = [], {type, payload}) => {
    switch (type) {
      case SEND_EMAIL:
        return payload
      default:
        return state
    }
}

export default mainReducer;
