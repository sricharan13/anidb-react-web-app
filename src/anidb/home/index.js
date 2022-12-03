import "./index.css";
import {Carousel as SingleCarousel} from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {
    findByAnimeGenreThunk,
    findRecentAnimeEpisodesThunk,
    findTrendingAnimeThunk
} from "./home-thunks";
import {responsive} from "../responsive";


const HomeComponent = () => {
    const genres = ["Action", "Adventure", "Cars", "Comedy", "Drama", "Fantasy", "Horror", "Mahou Shoujo",
                    "Mecha", "Music", "Mystery", "Psychological", "Romance", "Sci-Fi", "Slice of Life",
                    "Sports", "Supernatural", "Thriller"]
    const {recentEp} = useSelector((state) => state.home)
    const {trending, byGenre} = useSelector((state) => state.home)
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findRecentAnimeEpisodesThunk())
        dispatch(findTrendingAnimeThunk())
        dispatch(findByAnimeGenreThunk("Action"))
    }, [])
    const handleAnimeGenre= (data) => {
        dispatch(findByAnimeGenreThunk(data))
    }
    const toggleDropdown = () => setIsOpen(!isOpen)
    return(
        <>
            <h3 className="text-center">Home</h3>
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
            {/*Trending Anime*/}
            <div className="mt-2">
                <strong> Trending Now </strong>
                <div className="mt-2">
                    <Carousel responsive={responsive} autoPlay={true} infinite={true}>
                        {trending.map((t) => (
                            <div style={{width: "10rem"}} className="text-center">
                                    <img src={`${t.image}`} height={200} width={128} className="rounded"/>
                                    <div>{t.title.english ? t.title.english: t.title.romaji}</div>
                                    <div>{t.rating} | {t.type}</div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            {/*Anime By Genre*/}
            <div>
                <div>
                    <span className="display-6"> Anime By Genre </span>
                    <div className="dropdown float-end">
                        <button className="btn btn-primary dropdown-toggle rounded-pill" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false" onClick={toggleDropdown}> Genre
                        </button>
                        <div className={`dropdown-menu ${isOpen ? 'show' : ''} mt-1`} aria-labelledby="dropdownMenuButton">
                            <ul className="list-unstyled">
                                {
                                    genres.map((genre) =>
                                                   <li><a className="dropdown-item" href="#" onClick={() => {
                                                       handleAnimeGenre(genre); toggleDropdown()
                                                   }}>{genre}</a></li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        byGenre &&
                        <div className="mt-2">
                            <Carousel responsive={responsive} autoPlay={true} infinite={true}>
                                {byGenre.map((a) => (
                                    <div style={{width: "10rem"}} >
                                        <div className={"text-center"}>
                                            <img src={`${a.image}`} height={200} width={128} className="rounded"/>
                                            <div>{a.title.english ? a.title.english: a.title.romaji}</div>
                                            <div>{a.rating} | {a.type}</div>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default HomeComponent;