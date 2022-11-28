import React from "react"

const Card = (
    {
        card = { _id:123, img: '../../images/tesla_profile_image.jpg', name: 'Naruto', score: 9.1 }
    }
) => {
    return (
        <li key={card._id} className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded" height={70} width={50} src={card.img} alt="Unable to render."/>
                </div>
                <div className="col-8">
                    <div className="fw-bold">{card.name}</div>
                    <div>Score: {card.score}</div>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};

export default Card;