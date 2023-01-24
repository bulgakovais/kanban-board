
import styles from './ProjectPage.module.css'
import { Sidebar, Header } from "../../components"
import { Outlet } from 'react-router-dom'



export const ProjectPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.sidebar_container}>
                <Sidebar />
            </div>
            <div className={styles.project_container}>
                <Header />
                <Outlet />
            </div>
        </div>)
}