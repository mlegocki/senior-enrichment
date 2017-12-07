import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';

// ACTION CREATORS

function getCampuses(campuses) {
    const action = { type: GET_CAMPUSES, campuses };
    return action;
}

function addCampus(campus) {
    const action = { type: ADD_CAMPUS, campus }
    return action;
}

// THUNK CREATORS

export function fetchCampuses() {

    return function thunk(dispatch) {
        return axios.get('/api/campuses')
            .then(response => response.data)
            .then(campuses => {
                const action = getCampuses(campuses);
                dispatch(action);
            })
    }
}

export function postCampus(campus) {

    return function thunk(dispatch) { 
        return axios.post('/api/campuses', campus)
        .then(response => response.data)
        .then(newCampus => {
            const action = addCampus(newCampus);
            dispatch(action);
        });
    }
}

// REDUCER 

export default function reducer(state = [], action) {

    switch (action.type) {

        case GET_CAMPUSES:
            return action.campuses;

        case ADD_CAMPUS:
            return [...state, action.campus];

        default:
            return state;
    }
}
