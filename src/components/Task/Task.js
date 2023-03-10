import styles from './Task.module.css'
import classNames from "classnames"
import checkTask from '../../img/checkTask.svg'
import check from '../../img/check.svg'
import avatar from '../../img/avatar.svg'
import branch from '../../img/branch.svg'
import start from '../../img/start.svg'
import { onValue, update, set } from "firebase/database"
import { getSubtasksRefById, getTasksRefById, getSubtasks } from '../../services/firebase'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSubtasksFromStore } from '../../store/task/selector'
import { setSubtasks } from '../../store/task/actions'
import { Subtask } from '../Subtask/Subtask'
import { nanoid } from 'nanoid'



export const Task = (...el) => {

    const subtasks = useSelector(getSubtasksFromStore)
    const [openTask, setOpenTask] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()
    const task = el[0].el
    const subtasksByIdTasks = [...subtasks].filter(el => el.taskId === task.id)


    useEffect(() => {
        const unsubscribe = onValue(getSubtasks, (snapShots) => {

            let newSubTasks = []
            snapShots.forEach(snapshot => {
                newSubTasks.push(snapshot.val())
            })
            if (!newSubTasks) {
                return newSubTasks = []
            }
            dispatch(setSubtasks(newSubTasks))
        })
        return unsubscribe
    }, [task])



    const checkStatus = () => {
        const newTask = {
            status: !task.status
        }
        update(getTasksRefById(task.id), newTask)
    }


    const openTaskHandler = (event) => {

        // changeOpacity(event)

        if (task.status === false) {
            if (event.target.id === 'branch') {
                console.log(task.status);
                setOpenTask(!openTask)
            }

        } else if (task.status === true) {
            return
        }
    }


    const changeOpacity = (event) => {

        if (event.target.tagName == 'IMG') {
            if (task.status === true) {
                event.target.parentNode.classList.remove('opacity')
            }
            if (task.status === false) { event.target.parentNode.classList.add('opacity') }
            else return
        }
    }

    const createNewSubtask = (event) => {
        if (event.keyCode == '13') {
            const newSubtask = {
                id: nanoid(),
                taskId: task.id,
                name: inputValue,
                status: false
            }
            set(getSubtasksRefById(newSubtask.id), newSubtask)
            setInputValue('')
        } else return
    }


    const changeInputValue = (event) => {
        setInputValue(event.target.value)
    }


    function dragStartHandler(e, task) {
        console.log('drag: ', task);
    }
    function dragLeaveHandler(e) {

    }
    function dragEndHandler(e) {

    }
    function dragOverHandler(e) {
        e.preventDefault()
    }
    // function dropHandler(e, task) {
    //     e.preventDefault()
    //     console.log('drop: ', task);
    // }


    return (
        <div
            draggable={true}
            className={classNames(styles.container)}
            onDragStart={(e) => { dragStartHandler(e, task) }}
            onDragLeave={(e) => { dragLeaveHandler(e) }}
            onDragEnd={(e) => { dragEndHandler(e) }}
            onDragOver={(e) => { dragOverHandler(e) }}
        // onDrop={(e) => { dropHandler(e, task) }}
        >
            <div className={styles.taskName}>
                <div onClick={checkStatus}>
                    {task.status ? <img className='imgCheck' src={checkTask} /> : <img className='imgCheck' src={check} />}
                </div>
                <p className={styles.text}>{task.name}</p>
            </div>

            <div className={styles.descripContainer}>
                <div className={styles.descrLeft}>
                    <img src={avatar} />
                    <div className={styles.descrLeftTime}>
                        <span className={styles.time}>0 ??. / 34 ??.</span>
                        <span className={styles.time}>???? 10 ??????????????</span>
                    </div>
                </div>
                <div className={styles.branch} onClick={(event) => openTaskHandler(event)} >
                    <span className={styles.time}>2</span>
                    <img id='branch' className={styles.imgBranch} src={branch} />
                    <img src={start} />
                </div>
            </div>

            {openTask && <div onKeyDown={e => createNewSubtask(e)}>

                {subtasksByIdTasks.map(el => <div key={el.id}><Subtask subtasks={el} /></div>)}

                <input type='text'
                    className={styles.addSubtask}
                    value={inputValue}
                    onChange={e => changeInputValue(e)}
                    placeholder='+ ???????????????? ??????????????????'>
                </input>
            </div>
            }
        </div>
    )
}