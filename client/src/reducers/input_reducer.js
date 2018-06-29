import types from '../actions/types';

const DEFAULT_STATE = {
    student_name: "",
    class_name: "",
    grade_value: "",
    edit_student_name: "",
    edit_class_name: "",
    edit_grade_value: "",
    id: ''
};

export default ( state=DEFAULT_STATE , action ) => {
    switch (action.type) {
        case types.GET_SINGLE_STUDENT:
            let { student_name , class_name , grade_value , id} = action.payload.data.data[0];
            return {
                ...state,
                edit_student_name : student_name,
                edit_class_name: class_name,
                edit_grade_value: grade_value,
                id
            }
        case types.UPDATE_INPUT:
            return{
                ...state,
                [action.payload.name] : action.payload.value
            };
        case types.EDIT_INPUT:
            return {
                ...state,
                [action.payload.name] : action.payload.value
            }
        case types.CLEAR_INPUT:
            return {
                ...state,
                [action.payload] : ""
            }
        default:
            return state;
    }

};