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
    const response = axios.post( '/api/add_student' , student );

    return {
        type: types.ADD_STUDENT,
        payload: response
    };
};

export function deleteStudent( id ) {
    const idToSend = {
        params: {id}
    }
    const response = axios.delete( '/api/delete_student' , idToSend );

    return {
        type : types.DELETE_STUDENT,
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

export function clearInput( name ) {
    return {
        type: types.CLEAR_INPUT,
        payload: name
    }
}