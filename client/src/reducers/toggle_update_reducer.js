import types from '../actions/types';

const DEFAULT_STATE = {
    updateOn: false,
}

export default ( state=DEFAULT_STATE , action ) => {
    switch( action.type ){
        case types.TOGGLE_UPDATE:
            return {
                ...state,
                updateOn: action.payload
            }
        default:
            return state
    }
}