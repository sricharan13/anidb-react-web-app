import React from "react";
import {useSelector} from "react-redux";
import Card from "./card";

const RecommendedLists = () => {
    const cardArray = useSelector(state => state.card)
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <span className="fw-bold text-dark">Top Airing</span>
                </li>
                {/*{*/}
                {/*    cardArray.map(card => <Card key={card._id} card={card}/>*/}
                {/*    )*/}
                {/*}*/}
            </ul>
            <ul className="list-group mt-2">
                <li className="list-group-item">
                    <span className="fw-bold text-dark">Most Popular</span>
                </li>
                {/*{*/}
                {/*    cardArray.map(card => <Card key={card._id} card={card}/>*/}
                {/*    )*/}
                {/*}*/}
            </ul>
            <ul className="list-group mt-2">
                <li className="list-group-item">
                    <span className="fw-bold text-dark">Most Anticipated</span>
                </li>
                {/*{*/}
                {/*    cardArray.map(card => <Card key={card._id} card={card}/>*/}
                {/*    )*/}
                {/*}*/}
            </ul>
        </>
    )
}

export default RecommendedLists;