import { SET_TASKS, SET_TASKS_ERROR, SET_SUBTASKS, UPDATE_SUBTASKS } from './actions'

const initialState = {
    taskList: [],
    tasksError: null
}

export const taskReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_TASKS: {
            return {
                ...state,
                taskList: payload,
            };
        }
        case SET_TASKS_ERROR: {
            return {
                ...state,
                usersError: payload,
            };
        }
        default:
            return state;
    }
}

const initState = {
    subtasks: []
}

export const subtaskReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case SET_SUBTASKS: {
            return {
                ...state,
                subtasks: payload,
            };
        }

        default:
            return state;
    }
}