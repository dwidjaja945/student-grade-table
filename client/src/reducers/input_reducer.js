import types from '../actions/types';

const DEFAULT_STATE = {
    student_name: "",
    class_name: "",
    grade_value: ""
};

export default ( state=DEFAULT_STATE , action ) => {
    switch (action.type) {
        case types.UPDATE_INPUT:
            return{
                ...state,
                [action.payload.name] : action.payload.value
            };
        default:
            return state;
    }

};