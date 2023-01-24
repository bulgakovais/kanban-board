import { useParams } from "react-router-dom"
import { KanbanPage } from "../KanbanPage/KanbanPage";



export const MenuItemProjectPage = () => {

    const paramsPage = useParams()

    return (
        <>
            {paramsPage.name === 'kanban' ? <KanbanPage /> : <p>  Страница в разработке</p>}
        </>
    )
}