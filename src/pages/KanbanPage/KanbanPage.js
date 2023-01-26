import { Project, ProjectHeader } from "../../components"
import styles from './KanbanPage.module.css'

export const KanbanPage = () => {

    return (
        <div className={styles.container}>
            <ProjectHeader />
            <Project />
        </div>
    )
}