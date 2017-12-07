import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';

// ACTION CREATORS

export function getStudents(students) {
    const action = { type: GET_STUDENTS, students };
    return action;
}

export function getStudent(student) {
    const action = { type: GET_STUDENT, student };
    return action;
}

// THUNK CREATORS

export function fetchStudents() {

    return function thunk(dispatch) {
        return axios.get('/api/students')
            .then(response => response.data)
            .then(students => {
                const action = getStudents(students);
                dispatch(action);
            });
    };
}

export function fetchStudent() {

    return function thunk(dispatch) {
        return axios.get('/api/students/:studentId')
            .then(response => response.data)
            .then(student => {
                const action = getStudent(student);
                dispatch(action);
            });
    };
}

export default function reducer(state = [], action) {

    switch (action.type) {

        case GET_STUDENTS:
            return action.students;

        case GET_STUDENT:
            return action.student;
            
        default:
            return state;
    }
}