import types from '../actions/types';

const DEFAULT_STATE = {
    averageGrade : 0
};

export default ( state=DEFAULT_STATE , action ) => {
    switch (action.type) {
        case types.CALCULATE_AVERAGE_GRADE:
            return {
                ...state,
                averageGrade : action.payload
            }
        default: 
            return state;
    }
}