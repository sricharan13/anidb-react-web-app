import NavigationComponent from "./navigation_sidebar";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import usersReducer from "./users/users-reducer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeComponent from "./home";

const store = configureStore({reducer: {users: usersReducer}})

function Anidb() {
    return(
        <Provider store={store}>
            {/*<CurrentUser>*/}
                <BrowserRouter>
                    <div className="row mt-2 ms-2 me-2">
                        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                            <NavigationComponent/>
                        </div>
                        <div className="col-10 col-md-10 col-lg-7 col-xl-6" style={{"position": "relative"}}>
                            <Routes>
                                <Route path="/" element={<HomeComponent/>}/>
                            {/*    <Route path="users" element={<ExploreComponent/>}/>*/}
                            {/*    <Route path="profile" element={<ProfileComponent/>}/>*/}
                            </Routes>
                        </div>
                        <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                            <h1>Popular Anime Here...</h1>
                        </div>
                    </div>
                </BrowserRouter>
            {/*</CurrentUser>*/}
        </Provider>
    );
}

export default Anidb;