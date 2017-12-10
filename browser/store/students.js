import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

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

function deleteStudent(studentId) {
    const action = { type: DELETE_STUDENT, studentId };
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

export function delStudent(studentId) {

    return function thunk(dispatch) {
        return axios.delete(`/api/students/${studentId}`)
            .then(() =>
                dispatch(deleteStudent(studentId))
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
                student.id === action.updatedStudent.id  ? action.updatedStudent : student
            ));

        case DELETE_STUDENT:
            return students.filter(student => student.id !== action.studentId);

        default:
            return students;
    }
}