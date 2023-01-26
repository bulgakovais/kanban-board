import { getDatabase, ref } from "firebase/database"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAGur53N20JeGMrzYHc8ssn_GRjKVzEexs",
    authDomain: "kanban-board-94eed.firebaseapp.com",
    databaseURL: "https://kanban-board-94eed-default-rtdb.firebaseio.com",
    projectId: "kanban-board-94eed",
    storageBucket: "kanban-board-94eed.appspot.com",
    messagingSenderId: "179195783647",
    appId: "1:179195783647:web:4ee5cc4e85c3ba456bbc6a",
    measurementId: "G-9CGK1P8XN2"
};



const app = initializeApp(firebaseConfig)

export const db = getDatabase(app)
export const projectsRef = ref(db, 'projects')
export const projectTaskListRef = ref(db, 'projectTaskList')

// Все TaskList одного проекта
export const getProjectTaskListRefById = (projectId) => ref(db, `projectTaskList/${projectId}`)

export const getTasks = ref(db, 'taskList')

export const getTasksRefById = (taskId) => ref(db, `taskList/${taskId}`)

export const getSubtasks = ref(db, 'subTasks')
export const getSubtasksRefById = (subtaskId) => ref(db, `subTasks/${subtaskId}`)

export const getOneSubtask = (subtaskId) => ref(getSubtasksRefById, `/${subtaskId}`)