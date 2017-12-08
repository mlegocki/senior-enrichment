import axios from 'axios';

const LIST_TOGGLE = 'LIST_TOGGLE';
const STATUS_FALSE = 'STATUS_FALSE';

// ACTION CREATORS

function changeStatus() {
    const action = { type: LIST_TOGGLE };
    return action;
}

function statusFalse() {
    const action = { type: STATUS_FALSE, reset: false };
    return action;
}

// ACTION CREATORS

export function listToggle() {

    return function thunk(dispatch) {
        const action = changeStatus();
        return dispatch(action);
    };
}

export function resetStatus() {

    return function thunk(dispatch) {
        const action = statusFalse();
        return dispatch(action);
    };
}

// REDUCER 

export default function reducer(state = false, action) {

    switch (action.type) {

        case LIST_TOGGLE:
            if (state === false) {
                return true;
            } else {
                return false;
            }

        case STATUS_FALSE:
            return action.reset;

        default:
            return state;
    }
}
