import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" Component={Home} />
            </Routes>
        </>
    );
};

export default AppRoutes;
