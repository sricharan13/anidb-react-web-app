import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {findTopAiringAnimeThunk} from "./top-airing-thunks";
import {Link} from "react-router-dom";


const TopAiringComponent = () => {
    const {topairin} = useSelector((state) => state.topairing)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findTopAiringAnimeThunk())
    }, [dispatch])

    return (
        <>
            <div className="list-group mt-2">
                {
                    topairin && topairin.map((t) =>
                        <Link to={`/anime/${t.id}`} className="text-decoration-none">
                            <div className="list-group-item card d-flex">
                                <img className="card-img" src={`${t.image}`} width={100} height={120} alt={'poster'}/>
                                <div className="ms-2 card-title">
                                    <strong>{t.title}</strong><br/>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>

        </>
    )
}
export default TopAiringComponent;