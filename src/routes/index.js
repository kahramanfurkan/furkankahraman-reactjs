import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DetailPage from "../pages/DetailPage";
import Favorites from "../pages/Favorites";

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/details/:id" element={<DetailPage/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
    );
};

export default AppRoutes;

