import "./index.css";


const HomeComponent = () => {
    return(
        <>
            <div className="row">
                <div className="d-flex justify-content-between">
                    <input placeholder="Search your favourite Anime!!!" className="ps-5 w-75"/>
                    <button type="submit" className="form-control w-25">Search</button>
                </div>
            </div>
        </>
    );
}

export default HomeComponent;