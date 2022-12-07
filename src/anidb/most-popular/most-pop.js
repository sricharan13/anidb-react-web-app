import React from "react";

const MostPop = (
    {
        pop = { _id:123, img: '../../images/tesla_profile_image.jpg', name: 'Naruto', score: 9.1 }
    }
) => {
    return(
        <li key={pop._id} className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded" height={70} width={50} src={pop.img} alt="Unable to render."/>
                </div>
                <div className="col-8">
                    <div className="fw-bold">{pop.name}</div>
                    <div>Score: {pop.score}</div>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>

    );
};
export default MostPop;