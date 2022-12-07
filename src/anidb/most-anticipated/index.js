import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {findMostAnticipatedAnimeThunk} from "./most-anticipated-thunks";
import {Link} from "react-router-dom";

const MostAnticipatedComponent = () => {
    const {mostAnticipated} = useSelector((state) => state.mostanticipated)
    console.log(mostAnticipated)
    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(findMostAnticipatedAnimeThunk())
        },[dispatch]
    )
    return (
        <>
            <div className="list-group mt-3">
                <li className="list-group-item">
                    <span className="fw-bold text-dark">Most Anticipated</span>
                </li>
                {
                    mostAnticipated && mostAnticipated.map((m) =>
                            <li className="list-group-item d-flex">
                                <div>
                                    <img className="rounded" src={`${m.images.jpg.image_url}`} width={64} height={90}/>
                                </div>
                                <div className="ms-2">
                                    <span className="fw-bold"> {m.title_english ? m.title_english : m.title} </span><br/>
                                    <span> Releasing: {m.year ? m.year : "TBD"} </span><br/>
                                    <span> Type: {m.type ? m.type : "TBD"} </span><br/>
                                </div>
                            </li>
                    )
                }
            </div>

        </>
    )
}
export default MostAnticipatedComponent;