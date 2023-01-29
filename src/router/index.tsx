import {Route, Routes } from "react-router-dom"
import TestPage from "../pages/TestPage";

const Router = () => {
    return (
        <Routes>
            <Route path={"/test"} element={<TestPage/>}/>
        </Routes>
    )
}

export default Router;