import types from '../actions/types';

const DEFAULT_STATE = {
    delete_modal: {
        on: false,
        id: ''
    }
};

export default ( state=DEFAULT_STATE, action ) => {
    switch( action.type ) {
        case types.TOGGLE_DELETE_MODAL:
            return {
                ...state,
                delete_modal: action.payload
            }
        default:
            return state
    }
}