// Массив задач(столбцов) с подзадачами(tasks)
export const getTaskListWhisTasks = (state) => state.task.taskList

// export const getTasksById = (listId, state) => getTaskListWhisTasks(state)[listId]

export const getTaskbyId = (id, state) => getTaskListWhisTasks(state).filter(el => el.id == id)

export const getSubtasksFromStore = (state) => state.subtask.subtasks