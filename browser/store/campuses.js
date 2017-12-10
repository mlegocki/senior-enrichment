import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

// ACTION CREATORS

function getCampuses(campuses) {
    const action = { type: GET_CAMPUSES, campuses };
    return action;
}

function addCampus(campus) {
    const action = { type: ADD_CAMPUS, campus }
    return action;
}

function updateCampus(updatedCampus) {
    const action = { type: UPDATE_CAMPUS, updatedCampus }
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
            .then(newCampus => addCampus(newCampus));
    }
}

export function putCampus(campus) {

    return function thunk(dispatch) {
        return axios.put(`/api/campuses/${campus.id}`, campus)
            .then(response => response.data)
            .then(updatedCampus => 
               dispatch(updateCampus(updatedCampus))
            );
    }
}

// REDUCER 

export default function reducer(campuses = [], action) {

    switch (action.type) {

        case GET_CAMPUSES:
            return action.campuses;

        case ADD_CAMPUS:
            return [...campuses, action.campus];

        case UPDATE_CAMPUS:
            return campuses.map(campus => (
                action.updatedCampus.id === campus.id ? action.updatedCampus : campus
            ));

        default:
            return campuses;
    }
}
