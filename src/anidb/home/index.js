import "./index.css";
import {Carousel as SingleCarousel} from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {findRecentAnimeEpisodesThunk, findTrendingAnimeThunk} from "./home-thunks";
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
            <div>
                {/*Recently Released*/}
                <SingleCarousel className="mt-2">
                    {recentEp.map((ep) =>
                        <SingleCarousel.Item className="bg-dark rounded-2">
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
                        </SingleCarousel.Item>
                    )}
                </SingleCarousel>
            </div>

            {/*Action Anime*/}
            <div className="mt-2">
                <strong> Trending Now </strong>
                <div className="mt-2">
                    <Carousel responsive={responsive} autoPlay={true} infinite={true}>
                        {trending.map((t) => (
                            <div style={{width: "10rem"}} className="text-center">
                                    <img src={`${t.image}`} height={200} width={128}/>
                                    <div>{t.title.english ? t.title.english: t.title.romaji}</div>
                                    <div>{t.rating} | {t.type}</div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>

        </>
    );
}

export default HomeComponent;