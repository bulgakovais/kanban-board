import styles from './Subtask.module.css'
import checkTask from '../../img/checkTask.svg'
import uncheck from '../../img/check.svg'
import { getSubtasksRefById } from '../../services/firebase';
import { update } from "firebase/database"



export const Subtask = (...el) => {

    const subtask = el[0].subtasks

    const checkStatus = () => {
        const newSubtask = {
            status: !subtask.status
        }
        update(getSubtasksRefById(subtask.id), newSubtask)

    }


    return (
        <>

            <div className={styles.subtaskName}>
                <div onClick={checkStatus}>
                    {subtask.status ? <img className='imgCheck' src={checkTask} /> : <img className='imgCheck' src={uncheck} />}
                </div>
                <p className={styles.text}>{subtask.name}</p>
            </div>

        </>
    )
}