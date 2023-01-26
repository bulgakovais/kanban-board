import { Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/MainPage/MainPage"
import { MenuItemProjectPage } from "../pages/MenuItemProjectPage/MenuItemProjectPage"
import { ProjectPage } from "../pages/ProjectPage/ProjectPage"



export const ProjectRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/projects' element={<MainPage />} />
            <Route path='/projects/:id' element={<ProjectPage />} />

            <Route path='/projects/:id' element={<ProjectPage />}>
                <Route path='/projects/:id/:name' element={< MenuItemProjectPage />} />
            </Route>

        </Routes>
    )
}