import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {findTopAiringAnimeThunk} from "./top-airing-thunks";


const TopAiringComponent = () => {
    const {topAiring} = useSelector((state) => state.topairing)
    // console.log(topAiring)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findTopAiringAnimeThunk())
    }, [dispatch])

    return (
        <>
            <div className="list-group">
                <li className="list-group-item">
                    <span className="fw-bold text-dark">Top Airing</span>
                </li>
                {
                    topAiring && topAiring.map((top) =>
                                <li className="list-group-item d-flex">
                                    <div>
                                        <img className="rounded" src={`${top.images.jpg.image_url}`} width={64} height={90}/>
                                    </div>
                                    <div className="ms-2">
                                        <span className="fw-bold"> {top.title_english} </span><br/>
                                        <span> Released: {top.year} </span><br/>
                                        <span> Type: {top.type} </span><br/>
                                    </div>
                                </li>
                    )
                }
            </div>

        </>
    )
}
export default TopAiringComponent;