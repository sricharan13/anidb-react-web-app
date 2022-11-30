import "./index.css";
import {Carousel, Card, Stack} from 'react-bootstrap';


const HomeComponent = () => {
    const images = ['/images/space-x-starship.webp', '/images/one-piece-banner.jpeg']
    return(
        <>
            <div className="row">
                {/*Carousel*/}
                <Carousel className="mt-2">
                    {
                        images.map((image) =>
                            <Carousel.Item key={image}>
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
                <div className="mt-2">
                    <Carousel style={{ background: "grey" }}>{images.map((review, index) => (
                        <Carousel.Item>
                            <Stack direction="horizontal" className="h-100 justify-content-center align-items-center"
                                gap={3}>
                                <Card style={{ width: "18rem" }}>
                                    <Card.Body>
                                        <Card.Img src="/images/space-x-starship.webp"/>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and
                                            make up the bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card style={{width: "18rem"}}>
                                    <Card.Body>
                                        <Card.Img src="/images/one-piece-banner.jpeg"/>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and
                                            make up the bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card style={{width: "18rem"}}>
                                    <Card.Body>
                                        <Card.Img src="/images/one-piece-banner.jpeg"/>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and
                                            make up the bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Stack>
                        </Carousel.Item>))}
                    </Carousel>
                </div>

                {/*Anime News*/}
            </div>
        </>
    );
}

export default HomeComponent;