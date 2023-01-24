import { projectLists } from "../constants"

export const CREATE_TASK_LIST = 'CREATE_TASK_LIST'

export const SET_TASK_LIST = 'SET_TASK_LIST'
export const SET_TASK_ERROR = 'SET_TASK_ERROR'

export const REMOVE_TASK_LIST = 'REMOVE_TASK_LIST'

export const SET_ONE_TASK = 'SET_ONE_TASK'
export const REMOVE_ONE_TASK = 'REMOVE_ONE_TASK'

export const createTaskList = (taskList) => ({
    type: CREATE_TASK_LIST,
    payload: taskList
});
export const setTaskList = (taskList) => ({
    type: SET_TASK_LIST,
    payload: taskList
});
export const setTaskError = (error) => ({
    type: SET_TASK_ERROR,
    payload: error
})


export const getTaskListToId = (id) => async (dispatch) => {
    try {
        const list = projectLists.filter(el => el.id === id)
        if (list === undefined) {
            return alert("Что-то пошло не так...")
        }
        await dispatch(setTaskList(list))
    } catch (err) {
        dispatch(setTaskError(err.message))
    }
}