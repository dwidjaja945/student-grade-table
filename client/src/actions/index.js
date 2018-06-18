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

export function calculateAverageGrade(studentArray) {
    let totalPoints = 0;
    let numberOfStudents = 0;
    studentArray.map( ( item , itemIndex ) => {
        totalPoints += parseFloat(item.grade_value);
        numberOfStudents++
    });
    let average = (totalPoints / numberOfStudents).toFixed(2);
    if(average === 100.00) {
        average = 100;
    }

    return {
        type: types.CALCULATE_AVERAGE_GRADE,
        payload: average
    }
}

export function updateStudent( student , id) {

    const dataToSend = {
        ...student,
        id
    }

    const response = axios.post( '/api/update_student' , dataToSend );

    return{
        type: types.UPDATE_STUDENT,
        payload: response
    }
}

export function toggleUpdate(toggleOn) {
    let response = {
        updateOn: toggleOn.updateOn, 
    }

    if( response.updateOn === true ) {
        response.updateOn = false;
    } else {
        response.updateOn = true;
    };

    return {
        type: types.TOGGLE_UPDATE,
        payload: response
    }
}

export function getSingleStudent(id) {
    const dataToSend = {
        id
    };

    const response = axios.post('/api/single_student_data', dataToSend );

    return {
        type: types.GET_SINGLE_STUDENT,
        payload: response
    }
}
