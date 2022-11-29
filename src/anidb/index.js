import NavigationComponent from "./navigation_sidebar";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import usersReducer from "./users/users-reducer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeComponent from "./home";
import Login from "./users/login";
import CurrentUser from "./users/current-user";
import Profile from "./users/profile";
import Register from "./users/register";
import RecommendedLists from "./recommended-lists";
import cardReducer from "./reducers/card-reducer";
import searchReducer from "./reducers/search-reducer";
import SearchComponent from "./home/search";
import DetailsComponent from "./home/details-component";

const store = configureStore({
                                 reducer: {
                                     users: usersReducer,
                                     card: cardReducer,
                                     anisearch: searchReducer
                                 }
})

function Anidb() {
    return(
        <Provider store={store}>
            <CurrentUser>
                <BrowserRouter>
                    <div className="row mt-2 ms-2 me-2">
                        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                            <NavigationComponent/>
                        </div>
                        <div className="col-10 col-md-10 col-lg-7 col-xl-6">
                            <Routes>
                                <Route path="/" element={<HomeComponent/>}/>
                                <Route path="/search" element={<SearchComponent/>}/>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="/register" element={<Register/>}/>
                                <Route path="/profile" element={<Profile/>}/>
                                <Route path="/anime/:animeId" element={<DetailsComponent/>}/>
                            </Routes>
                        </div>
                        <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                            <RecommendedLists/>
                        </div>
                    </div>
                </BrowserRouter>
            </CurrentUser>
        </Provider>
    );
}

export default Anidb;