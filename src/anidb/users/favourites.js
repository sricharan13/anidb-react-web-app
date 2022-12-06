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
            {/*<pre> {JSON.stringify(favorites)} </pre>*/}
            <ul className="list-group">
                {
                    favorites && favorites.map((favorite) =>
                                <Link to={`/anime/${favorite.animeId}`} className="text-decoration-none list-group-item d-flex align-items-center">
                                    <div>
                                        <img src={favorite.animeImg} alt="Unable to render" height={100} width={67} className="rounded"/>
                                    </div>
                                    <h2 className="ms-2">
                                        {favorite.animeTitle}
                                    </h2>
                                </Link>
                              )
                }
            </ul>
        </>
    )
}

export default Favourites;