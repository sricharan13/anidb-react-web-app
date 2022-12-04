import NavigationComponent from "./navigation-sidebar";
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
import searchReducer from "./home/search-reducer";
import SearchComponent from "./home/search";
import DetailsComponent from "./home/details-component";
import reviewsReducer from "./reviews/reviews-reducer";
import homeReducer from "./reducers/home-reducer";
import Account from "./users/account";
import Favourites from "./users/favourites";
import People from "./users/people";
import MyActivity from "./users/my-activity";
import UserList from "./users";
import ProtectedRoute from "./users/protected-route";
import favoritesReducer from "./favorites/favorites-reducer";
import PublicProfile from "./users/public-profile";
import followsReducer from "./follows/follows-reducer";
import ratingsReducer from "./ratings/ratings-reducer";

const store = configureStore({
                                 reducer: {
                                     users: usersReducer,
                                     anisearch: searchReducer,
                                     reviews: reviewsReducer,
                                     home: homeReducer,
                                     favorites: favoritesReducer,
                                     follows: followsReducer,
                                     ratings: ratingsReducer
                                 }
                             })

function Anidb() {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <CurrentUser>
                    <div className="row mt-2 ms-2 me-2 mb-2">
                        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                            <NavigationComponent/>
                        </div>
                        <div className="col-10 col-md-10 col-lg-7 col-xl-6">
                            <Routes>
                                <Route path="/" element={<HomeComponent/>}/>
                                <Route path="/search" element={<SearchComponent/>}/>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="/register" element={<Register/>}/>
                                <Route path="/users" element={<UserList/>}/>
                                <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}>
                                    <Route path="account" element={<Account/>}/>
                                    <Route path="favourites" element={<Favourites/>}/>
                                    <Route path="people" element={<People/>}/>
                                    <Route path="my-activity" element={<MyActivity/>}/>
                                </Route>
                                <Route path="/public-profile/:uid" element={<PublicProfile/>}/>
                                <Route path="/anime/:animeId" element={<DetailsComponent/>}/>
                            </Routes>
                        </div>
                        <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                            <RecommendedLists/>
                        </div>
                    </div>
                </CurrentUser>
            </BrowserRouter>
        </Provider>
    );
}

export default Anidb;