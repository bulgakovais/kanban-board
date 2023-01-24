// import { SET_USERS, SET_USERS_ERROR } from './actions'

const initialState = {
    projects: [],
    projectsError: null
}

export const projectReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        // case SET_USERS: {
        //     return {
        //         ...state,
        //         users: payload,
        //         usersError: null,
        //     };
        // }
        // case SET_USERS_ERROR: {
        //     return {
        //         ...state,
        //         usersError: payload,
        //     };
        // }
        default:
            return state;
    }
}