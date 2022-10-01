import { FETCH_SURVEYS } from '../actions/types'

// eslint-disable-next-line
export default function(state = null, action) {
    switch (action.type) {
        case FETCH_SURVEYS:
            return action.payload.length > 0 ? action.payload : false;
        default:
            return state;
    }
}
