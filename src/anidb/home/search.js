import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findByAnimeIdThunk, findBySearchTermThunk} from "./search-thunks";
import {Link} from "react-router-dom";

const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const {anime} = useSelector((state) => state.anisearch)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findBySearchTermThunk(searchTerm))
    }, [])
    return (
        <>
            <div className="input-group">
                <input type="search" className="form-control rounded rounded-pill me-2" placeholder="Search Anime..."
                       aria-label="Search" aria-describedby="search-addon"
                       onChange={(e) => { setSearchTerm(e.target.value) }}
                       value={searchTerm}/>

                <button type="button" className="btn btn-outline-primary rounded-pill"
                        onClick={() => {dispatch(findBySearchTermThunk(searchTerm)) }}>Search</button>
            </div>
            <div className="list-group mt-2">
                {
                    anime && anime.map((a) =>
                                           <Link to={`/anime/${a.id}`} key={a.id} className="text-decoration-none rounded">
                                               <div className="list-group-item d-flex">
                                                   <img src={`${a.image}`} width={100} height={120}/>
                                                   <div className="ms-2">
                                                       <strong>{a.title.english ? a.title.english: a.title.romaji}</strong><br/>
                                                       <span>Rating: {a.rating}</span><br/>
                                                       <span>Released: {a.releaseDate}</span><br/>
                                                       <span>Type: {a.type}</span><br/>
                                                   </div>
                                               </div>
                                           </Link>
                          )
                }
            </div>

        </>
    )
}

export default SearchComponent;

// onClick={() => {
//     dispatch(userLikesMovieThunk({
//                                      uid: 111, mid: movie.imdbID
//                                  }))
// }}