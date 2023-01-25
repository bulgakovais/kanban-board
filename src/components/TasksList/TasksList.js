import { Task } from "../Task/Task"
import styles from './TasksList.module.css'
import classNames from 'classnames'
import { useState } from "react";
import { onValue, update, remove, set, push } from "firebase/database"
import { getProjectTaskListRefById } from "../../services/firebase";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskListFromState } from '../../store/taskList/selectors'


export const TaskList = (el) => {

    const taskList = useSelector(getTaskListFromState)
    const tasks = el.list.tasks
    const selectorURL = useParams()
    const [openMenu, setOpenMenu] = useState(false)

    const createTask = () => {

    }

    const clickMenu = () => {
        setOpenMenu(!openMenu)
    }

    const deleteTaskList = () => {
        const newTaskList = taskList.filter(list => list.id !== el.list.id)
        set(getProjectTaskListRefById(selectorURL.id), newTaskList)
        setOpenMenu(!openMenu)
    }

    return (
        <>
            <div onClick={createTask} className={styles.container}>
                <p className={styles.headering}>Нужно сделать</p>
                <div className={styles.headeringItems}>
                    <p className={styles.headeringMenuAdd}>+</p>
                    <p className={styles.headeringMenu} onClick={clickMenu}>...</p>
                    {openMenu && <p className={styles.deleteList} onClick={deleteTaskList}>Удалить</p>}
                </div>
            </div>

            <div>
                {/* {tasks.map(el =>
                    <Task task={el} />
                )} */}
            </div>
        </>
    )
}