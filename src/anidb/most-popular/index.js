import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {findMostPopularAnimeThunk} from "./most-popular-thunks";
import {Link} from "react-router-dom";
const MostPopularComponent = () => {
    const {mostpopul} = useSelector((state) => state.mostpopular)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findMostPopularAnimeThunk())
    }, [dispatch])
    return (
        <>
            <div className="list-group mt-2">
                {
                    mostpopul && mostpopul.map((mostp) =>
                        <Link to={`/anime/${mostp.id}`} className="text-decoration-none">
                            <div className="list-group-item card d-flex">
                                <img className="card-img" src={`${mostp.image}`} width={100} height={120} alt={'poster'}/>
                                <div className="ms-2 card-title">
                                    <strong>{mostp.title}</strong><br/>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </>
    )
}
export default MostPopularComponent;