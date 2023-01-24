import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { setTaskList } from "../../store/taskList/actions";
import { onValue, update, remove, set } from "firebase/database"
import { getTaskListRefById, projectTaskListRef } from "../../services/firebase";


import { getTaskListFromState } from "../../store/taskList/selectors";


export const Project = () => {
    const dispatch = useDispatch()
    const selectorURL = useParams()


    /**
        * При загрузке страницы подгружает taskList из БД,
        * записывает его в store
        */
    useEffect(() => {
        // set(projectTaskListRef, projectLists)
        const unsubscribe = onValue(projectTaskListRef, (snapShots) => {

            let newTaskList = []

            snapShots.forEach(snapshot => {
                newTaskList.push(snapshot.val())
            })
            newTaskList = newTaskList.filter(el => el.id === Number(selectorURL.id))
            console.log('newTaskList: ', newTaskList);
            if (!newTaskList) {
                return newTaskList = []
            }
            dispatch(setTaskList(newTaskList))
        })
        return unsubscribe
    }, [selectorURL])

    const taskList = useSelector(getTaskListFromState)

    return (
        <>
            <p>привет</p>
        </>
    )
}

