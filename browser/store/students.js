import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';

// ACTION CREATORS

export function getStudents(students) {
    const action = { type: GET_STUDENTS, students };
    return action;
}

export function addStudent(student) {
    const action = { type: ADD_STUDENT, student };
    return action;
}

export function updateStudent(updatedStudent) {
    const action = { type: UPDATE_STUDENT, updatedStudent }
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

export default function reducer(state = [], action) {

    switch (action.type) {

        case GET_STUDENTS:
            return action.students;

        case ADD_STUDENT:
            return [...state, action.student];

        case UPDATE_STUDENT:
            return state.map(student => {
                if (student.id !== action.updatedStudent.id) {
                    return student;
                } else {
                    return action.updatedStudent;
                }
            });

        default:
            return state;
    }
}