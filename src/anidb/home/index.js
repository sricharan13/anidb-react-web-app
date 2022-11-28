import "./index.css";
import Carousel from 'react-bootstrap/Carousel';
import {useDispatch} from "react-redux";
import Search from "./search";


const HomeComponent = () => {
    const images = ['/images/space-x-starship.webp', '/images/one-piece-banner.jpeg']
    return(
        <>
            <div className="row">
                {/*Search*/}
                <Search/>

                {/*Carousel*/}
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

                {/*Latest Anime*/}
                <div>

                </div>

                {/*Anime News*/}
            </div>
        </>
    );
}

export default HomeComponent;