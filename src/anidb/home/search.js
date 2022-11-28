import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findBySearchTermThunk} from "./search-thunks";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const {anime, loading} = useSelector((state) => state.anisearch)
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
                        onClick={() => { dispatch(findBySearchTermThunk(searchTerm)) }}>Search</button>
            </div>
            {
                anime && anime.map((a) =>
                                         <li key={a.id} className="list-group-item">
                                             <i className="float-end bi bi-hand-thumbs-up"></i>
                                             <i className="float-end bi bi-hand-thumbs-down me-2"></i>
                                             {a.title}
                                         </li>
                       )
            }

        </>
    )
}

export default Search;

// onClick={() => {
//     dispatch(userLikesMovieThunk({
//                                      uid: 111, mid: movie.imdbID
//                                  }))
// }}