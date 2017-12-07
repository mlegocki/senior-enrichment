import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';

// ACTION CREATORS

function getCampuses(campuses) {
    const action = { type: GET_CAMPUSES, campuses };
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

// REDUCER 

export default function reducer(state = [], action) {
    
    switch (action.type) {

        case GET_CAMPUSES:
            return action.campuses;
            
        default:
            return state;
    }
}
