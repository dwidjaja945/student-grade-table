import types from './types';
import axios from 'axios';
import dummyData from '../dummydata';

export function incrementCount(count) {
    return {
        type: types.INCREMENT_COUNT,
        payload: ++count
    };
};



// export async function getStudentList() {
export function getStudentList() {

    // axios call can go here
    const response = axios.get( '/api/get_student_data' );

    return {
        type: types.GET_STUDENT_LIST,
        payload: response
    };
};

export function addStudent( student ) {
    debugger;
    const response = axios.post( '/api/add_student' , student );

    return {
        type: types.ADD_STUDENT,
        payload: response
    };
};

export function updateInput( name , value ) {
    return {
        type: types.UPDATE_INPUT,
        payload: {
            name,
            value
        }
    }
}