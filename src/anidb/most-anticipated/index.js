import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {findMostAnticipatedAnimeThunk} from "./most-anticipated-thunks";
import {Link} from "react-router-dom";

const MostAnticipatedComponent = () => {
    const {mostantic} = useSelector((state) => state.mostanticipated)
    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(findMostAnticipatedAnimeThunk())
        },[dispatch]
    )
    return (
        <>
            <div className="list-group mt-2">
                {
                    mostantic && mostantic.map((mo) =>
                        <Link to={`/anime/${mo.id}`} className="text-decoration-none">
                            <div className="list-group-item card d-flex">
                                <img className="card-img" src={`${mo.image}`} width={100} height={120} alt={'poster'}/>
                                <div className="ms-2 card-title">
                                    <strong>{mo.title}</strong><br/>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>

        </>
    )
}
export default MostAnticipatedComponent;