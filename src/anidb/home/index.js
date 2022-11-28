import "./index.css";
import Carousel from 'react-bootstrap/Carousel';

const HomeComponent = () => {
    const images = ['/images/space-x-starship.webp', '/images/one-piece-banner.jpeg']
    return(
        <>
            <div className="row">
                <div className="d-flex justify-content-between">
                    <input placeholder="Search your favourite Anime!!!" className="ps-5 w-75"/>
                    <button type="submit" className="form-control w-25">Search</button>
                </div>
                <Carousel className="mt-2">
                    {
                        images.map((image) =>
                            <Carousel.Item>
                                <img className="d-block w-100" height="300px" src={`${image}`} alt="First Slide"/>
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    }
                </Carousel>
            </div>
        </>
    );
}

export default HomeComponent;