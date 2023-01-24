export const SET_TASK_LIST = 'SET_TASK_LIST'
export const CREATE_TASK_LIST = 'CREATE_TASK_LIST'
export const SET_TASK_ERROR = 'SET_TASK_ERROR'
export const REMOVE_TASK_LIST = 'REMOVE_TASK_LIST'

const initialState = {
    taskList: [],
    projectsError: null
}

export const taskReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_TASK_LIST: {
            return {
                ...state,
                taskList: [
                    ...state.taskList,
                    payload
                ],
                usersError: null,
            };
        }
        case SET_TASK_LIST: {
            return {
                ...state,
                taskList: payload,
            };
        }
        case SET_TASK_ERROR: {
            return {
                ...state,
                usersError: payload,
            };
        }
        case REMOVE_TASK_LIST: {
            const { id } = payload
            return {
                ...state,
                taskList: [
                    ...state.taskList.filter(el => el.id !== id)
                ],
                usersError: null,
            };
        }
        default:
            return state;
    }
}