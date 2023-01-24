
import styles from './ProjectPage.module.css'
import { Sidebar, Header, Project } from "../../components"



export const ProjectPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.sidebar_container}>
                <Sidebar />
            </div>
            <div className={styles.project_container}>
                <Header />
                <Project />
            </div>
        </div>)
}