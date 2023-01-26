import { Task } from "../Task/Task"
import styles from './TasksList.module.css'
import classNames from 'classnames'
import { useEffect, useState } from "react";
import { onValue, set } from "firebase/database"
import { getProjectTaskListRefById, getTasks, getTasksRefById } from "../../services/firebase";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTaskListFromState } from '../../store/taskList/selectors'
import { nanoid } from 'nanoid'
import { setTasks } from "../../store/task/actions";
import { getTaskListWhisTasks } from "../../store/task/selector";
import user from '../../img/user.svg'



export const TaskList = (el) => {

    const dispatch = useDispatch()
    const allTaskList = useSelector(getTaskListFromState)
    const targetTaskList = el.list
    const selectorURL = useParams()
    const [openMenu, setOpenMenu] = useState(false)

    const tasksColumn = [...useSelector(getTaskListWhisTasks)]

    const tasks = tasksColumn.filter(el => el.taskListId == targetTaskList.id)
    const [inputValue, setInputValue] = useState('')


    useEffect(() => {

        const unsubscribe = onValue(getTasks, (snapShots) => {

            let newTasks = []
            snapShots.forEach(snapshot => {
                newTasks.push(snapshot.val())
            })
            if (!newTasks) {
                return newTasks = []
            }
            dispatch(setTasks(newTasks))
        })
        return unsubscribe
    }, [])


    const setInput = (e) => {
        setInputValue(e.target.value)
    }

    const createNewTaskByEnter = (event) => {
        if (event.keyCode == '13') {
            createTask()
        }
    }
    const createTask = () => {

        const newTask = {
            id: nanoid(),
            taskListId: targetTaskList.id,
            name: inputValue,
            status: false,
        }
        set(getTasksRefById(newTask.id), newTask)
        setInputValue('')
    }

    const clickMenu = () => {
        setOpenMenu(!openMenu)
    }

    const deleteTaskList = () => {
        const newTaskList = allTaskList.filter(oneTL => oneTL.id !== el.list.id)
        set(getProjectTaskListRefById(selectorURL.id), newTaskList)
        setOpenMenu(!openMenu)
    }


    function dropHandler(e, targetTaskList) {
        console.log('taskList: ', targetTaskList);

    }

    function dragEndHandler(e) {

    }
    function dragOverHandler(e) {
        e.preventDefault()
    }

    return (
        <div
            onDrop={(e) => { dropHandler(e, targetTaskList) }}
            onDragEnd={(e) => { dragEndHandler(e) }}
            onDragOver={(e) => { dragOverHandler(e) }}
            className={styles.taskListContainer}>

            <div className={styles.container}>
                <p className={styles.headering}>Нужно сделать</p>
                <div className={styles.headeringItems}>
                    <p className={styles.headeringMenuAdd} onClick={createTask}>+</p>
                    <p className={styles.headeringMenu} onClick={clickMenu}>...</p>
                    {openMenu && <p className={styles.deleteList} onClick={deleteTaskList}>Удалить</p>}
                </div>
            </div>

            <div
                className={styles.tasksContainer}>
                {tasks.map(el =>
                    <div key={el.id}><Task el={el} /></div>
                )}
            </div>

            <div className={styles.createTaskContainer}>
                <div className={styles.inputPlus} onKeyDown={e => createNewTaskByEnter(e)}>
                    <input className={styles.inputStyle} type="text" value={inputValue} onChange={setInput} placeholder='Напишите название задачи...'></input>
                    <p className={classNames(styles.headeringMenuAdd, styles.plus)} onClick={createTask}>+</p>
                </div>
                <img className={styles.imgUser} src={user}></img>
            </div>

        </div>
    )
}