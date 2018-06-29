import types from '../actions/types';

const DEFAULT_STATE = {
    node_server: true
}

export default ( state=DEFAULT_STATE , action ) => {
    switch( action.type ) {
        case types.TOGGLE_SERVER:
            return {
                ...state,
                node_server : action.payload
            }
        default:
            return state
    }
};

