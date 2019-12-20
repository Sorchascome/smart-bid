import {SEND_EMAIL} from '../actions/constants'
import axios from 'axios'

const mainReducer = (state = {}, {type, payload}) => {
    switch (type) {
      case SEND_EMAIL:
        axios.post('https://platform-api.smart.bid/contact3', {		
            'section': 1,
            'email': payload
        })
        .then(res => {
          return res.data.message
        })
        .catch(err => {return err})
      default:
        return state
    }
}

export default mainReducer;
