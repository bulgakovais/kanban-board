import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { setTaskList } from "../../store/taskList/actions";
import { onValue, update, remove, set, push } from "firebase/database"
import { getProjectTaskListRefById } from "../../services/firebase";
import { nanoid } from 'nanoid'

import { getTaskListFromState } from "../../store/taskList/selectors";
import { TaskList } from "../TasksList/TasksList";
import styles from "./Project.module.css";


export const Project = () => {
    const dispatch = useDispatch()
    const selectorURL = useParams()


    /**
        * При загрузке страницы подгружает taskList из БД,
        * записывает его в store
        */
    useEffect(() => {

        const unsubscribe = onValue(getProjectTaskListRefById(selectorURL.id), (snapShots) => {

            let newTaskList = []

            snapShots.forEach(snapshot => {
                newTaskList.push(snapshot.val())
            })
            if (!newTaskList) {
                return newTaskList = []
            }

            dispatch(setTaskList(newTaskList))
        })
        return unsubscribe
    }, [selectorURL])


    const createNewTaskList = () => {
        const newTaskList = {
            id: nanoid(),
            name: 'Новый столбец'
        }
        push(getProjectTaskListRefById(selectorURL.id), newTaskList)
    }
    const taskList = useSelector(getTaskListFromState)


    return (
        <div className={styles.container}>

            <div className={styles.listContainer}>{taskList.map(el => < TaskList list={el} />)}
                <div className={styles.addTaskList} onClick={createNewTaskList}>
                    <p>+</p>
                    <p>Добавить столбец</p>
                </div>
            </div>


        </div>
    )
}

