import types from './types';
import axios from 'axios';

export function getStudentList(server) {
    debugger;

    let response;
    if (server) {
        response = axios.get('/api/get_student_data');
    } else {
        response = axios.get("/php_server/get_student_data.php");
    }

    return {
        type: types.GET_STUDENT_LIST,
        payload: response
    };
};

export function addStudent(student) {
    const response = axios.post('/api/add_student', student);
    // const response = axios.post('../../../php_server/add_student.php', student);

    return {
        type: types.ADD_STUDENT,
        payload: response
    };
};

export function deleteStudent(id) {
    const idToSend = {
        params: { id }
    }
    const response = axios.delete('/api/delete_student', idToSend);

    return {
        type: types.DELETE_STUDENT,
        payload: response
    };
};

export function updateInput(name, value) {
    return {
        type: types.UPDATE_INPUT,
        payload: {
            name,
            value
        }
    }
}

export function editInput(name, value) {
    return {
        type: types.EDIT_INPUT,
        payload: {
            name,
            value
        }
    }
}

export function clearInput(name) {
    return {
        type: types.CLEAR_INPUT,
        payload: name
    }
}

export function calculateAverageGrade(studentArray) {
    let totalPoints = 0;
    studentArray.map((item, itemIndex) => {
        totalPoints += parseFloat(item.grade_value);
    });
    let average = (totalPoints / studentArray.length).toFixed(2);
    if (average === 100.00) {
        average = 100;
    }

    return {
        type: types.CALCULATE_AVERAGE_GRADE,
        payload: average
    }
}

export function updateStudent(student, id) {

    const dataToSend = {
        ...student,
        id
    }

    const response = axios.post('/api/update_student', dataToSend);

    return {
        type: types.UPDATE_STUDENT,
        payload: response
    }
}

export function toggleUpdate(toggleOn) {
    let response = {
        updateOn: toggleOn.updateOn,
    }

    if (response.updateOn === true) {
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

    const response = axios.post('/api/single_student_data', dataToSend);

    return {
        type: types.GET_SINGLE_STUDENT,
        payload: response
    }
}

export function toggleServer(state) {
    debugger;
    if (state.node_server) {
        return {
            type: types.TOGGLE_SERVER,
            payload: false
        };
    } else {
        return {
            type: types.TOGGLE_SERVER,
            payload: true
        };
    };
}