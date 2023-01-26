export const SET_TASKS = 'SET_ONE_TASK'
export const SET_TASKS_ERROR = 'SET_TASKS_ERROR'
export const SET_SUBTASKS = 'SET_SUBTASKS'
export const UPDATE_SUBTASKS = 'UPDATE_SUBTASKS'

export const setTasks = (tasks) => ({
    type: SET_TASKS,
    payload: tasks
});
export const setTasksError = (error) => ({
    type: SET_TASKS_ERROR,
    payload: error
})

export const setSubtasks = (subtasks) => ({
    type: SET_SUBTASKS,
    payload: subtasks
})



