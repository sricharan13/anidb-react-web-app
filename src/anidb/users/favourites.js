import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findFavoritesByUserThunk} from "../favorites/favorites-thunks";
import {Link} from "react-router-dom";


const Favourites = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {favorites} = useSelector((state) => state.favorites)
    const dispatch = useDispatch()
    useEffect(() => {
        if (currentUser) {
            dispatch(findFavoritesByUserThunk(currentUser._id))
        }
    }, [])
    return(
        <>
            <div>Favourites</div>
            {/*<pre> {JSON.stringify(favorites)} </pre>*/}
            <ul className="list-group">
                {
                    favorites && favorites.map((favorite) =>
                                <Link to={`/anime/${favorite.animeId}`} className="text-decoration-none">
                                    <li className="list-group-item d-flex rounded">
                                        <div>
                                            <img src={favorite.animeImg} alt="Unable to render" height={200} width={128} className="rounded"/>
                                        </div>
                                        <div className="fw-bold display-4 ms-2 mt-5">
                                            {favorite.animeTitle}
                                        </div>
                                    </li>
                                </Link>
                              )
                }
            </ul>
        </>
    )
}

export default Favourites;