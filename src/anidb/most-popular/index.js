import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {findMostPopularAnimeThunk} from "./most-popular-thunks";
import {Link} from "react-router-dom";

const MostPopularComponent = () => {
    const {mostPopular} = useSelector((state) => state.mostpopular)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findMostPopularAnimeThunk())
    }, [dispatch])

    return (
        <>
            <div className="list-group">
                <li className="list-group-item">
                    <span className="fw-bold text-dark">All-Time Popular</span>
                </li>
                {
                    mostPopular && mostPopular.filter((item, index) => index < 5).map((m) =>
                           <Link to={`/anime/${m.id}`} className="text-decoration-none">
                               <li className="list-group-item d-flex">
                                   <div>
                                       <img className="rounded" src={`${m.image}`} width={64} height={90}/>
                                   </div>
                                   <div className="ms-2">
                                       <span className="fw-bold"> {m.title.english ? m.title.english : m.title.romaji} </span><br/>
                                       <span> Released: {m.releaseDate} </span><br/>
                                       <span> Rating: {m.rating} </span><br/>
                                       <span> Type: {m.type} </span><br/>
                                   </div>
                               </li>
                           </Link>
                    )
                }
            </div>
        </>
    )
}
export default MostPopularComponent;