import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';

// ACTION CREATORS

function getStudents(students) {
    const action = { type: GET_STUDENTS, students };
    return action;
}

function addStudent(student) {
    const action = { type: ADD_STUDENT, student };
    return action;
}

function updateStudent(updatedStudent) {
    const action = { type: UPDATE_STUDENT, updatedStudent };
    return action;
}

// THUNK CREATORS

export function fetchStudents() {

    return function thunk(dispatch) {
        return axios.get('/api/students')
            .then(response => response.data)
            .then(students => {
                const action = getStudents(students);
                return dispatch(action);
            });
    };
}

export function postStudent(student) {

    return function thunk(dispatch) {
        return axios.post('/api/students', student)
            .then(response => response.data)
            .then(newStudent =>
                dispatch(addStudent(newStudent))
            );
    }
}

export function putStudent(student) {

    return function thunk(dispatch) {
        return axios.put(`/api/students/${student.id}`, student)
            .then(response => response.data)
            .then(updatedStudent =>
                 dispatch(updateStudent(updatedStudent))
            );
    }
}

// REDUCER

export default function reducer(students = [], action) {

    switch (action.type) {

        case GET_STUDENTS:
            return action.students;

        case ADD_STUDENT:
            return [...students, action.student];

        case UPDATE_STUDENT:
            return students.map(student => (
                action.updatedStudent.id === student.id ? action.updatedStudent : student
            ));

        default:
            return students;
    }
}