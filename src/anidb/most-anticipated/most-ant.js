import React from "react";

const MostAnt = (
    {
        ant = { _id:123, img: '../../images/tesla_profile_image.jpg', name: 'Naruto', score: 9.1 }
    }
) => {

    return(
        <li key={ant._id} className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded" height={70} width={50} src={ant.img} alt="Unable to render."/>
                </div>
                <div className="col-8">
                    <div className="fw-bold">{ant.name}</div>
                    <div>Score: {ant.score}</div>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>

    );
};
export default MostAnt;