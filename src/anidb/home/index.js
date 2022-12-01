import "./index.css";
import {Carousel, Card, Stack} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {findRecentAnimeEpisodesThunk, findTrendingAnimeThunk} from "./home-thunks";
import {Link} from "react-router-dom";
import {responsive} from "../responsive";


const HomeComponent = () => {
    const images = ['/images/space-x-starship.webp', '/images/one-piece-banner.jpeg']
    const {recentEp} = useSelector((state) => state.home)
    const {trending} = useSelector((state) => state.home)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findRecentAnimeEpisodesThunk())
        dispatch(findTrendingAnimeThunk())
    }, [])
    return(
        <>
            <pre>
                {JSON.stringify(recentEp)}
            </pre>

            <pre>
                {JSON.stringify(trending)}
            </pre>

            <div className="row">
                {/*Recently Released*/}
                <Carousel className="mt-2">
                    {
                        recentEp.map((ep) =>
                                <Carousel.Item className="bg-dark rounded-2">
                                    <div className="d-flex justify-content-between">
                                        <div className="text-light ms-5 mt-5">
                                            <h3>{ep.title.english ? ep.title.english: ep.title.romaji}</h3>
                                            <span>{ep.episodeTitle} (Ep. No: {ep.episodeNumber}) </span> <br/>
                                            <span>Type: {ep.type} </span> <br/>
                                            <span>Rating: {ep.rating} </span> <br/>
                                        </div>
                                        <div>
                                            <img className="d-block rounded" width={200} height={300} src={`${ep.image}`} alt="Unable to render"/>
                                        </div>
                                    </div>
                                </Carousel.Item>
                        )
                    }
                </Carousel>

                {/*Action Anime*/}
                <div className="mt-2 rounded">
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