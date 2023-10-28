import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Collections from "../Pages/Collections";
import Pairings from "../Pages/Pairings";
import ViewCollection from "../Pages/ViewCollection";
import ViewDetails from "../Pages/ViewDetails";
import CollectionList from "../Pages/CollectionList";
const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" Component={Home} />
                <Route exact path="/collections" Component={Collections} />
                <Route exact path="/collection-list" Component={CollectionList} />
                <Route exact path="/pairings" Component={Pairings} />
                <Route exact path="/view-collection" Component={ViewCollection} />
                <Route exact path="/view-details" Component={ViewDetails} />
            </Routes>
        </>
    );
};

export default AppRoutes;
