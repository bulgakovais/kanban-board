import { Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/MainPage/MainPage"
import { ProjectPage } from "../pages/ProjectPage/ProjectPage"



export const ProjectRoutes = () => {
    return (
        <Routes>
            <Route path='/projects' element={<MainPage />} />
            <Route path='/projects/:id' element={<ProjectPage />} />
        </Routes>
    )
}