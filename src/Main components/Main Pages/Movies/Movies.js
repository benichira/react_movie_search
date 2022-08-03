import React from 'react';
import axios from "axios";
import {useState, useEffect} from "react";
import MovieDetails from "../Movie Details/MovieDetails";
import MovieResults from "../MovieResults";
import "./Movies.css"

function Movies(props) {
    const [finishedSearch, setFinishedSearch] = useState(false);
    const [movie, setMovie] = useState(null)

    function handleMovieSubmit(e) {
        e.preventDefault()
        // setSearchedMovie(movieSearch);
        setFinishedSearch(true)
    }

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=9a99b30d21b8a588189ca7ab443a2d3d&language=en-US&query=${props.movieSearch}&page=1&include_adult=false`)
            .then((res) => {
                // console.log('searched movie', res)
                setMovie(res)
            })
            .catch((errors) => {
                console.error(errors);
            });
    }, [finishedSearch])


    return (
        <div className='movies-wrapper'>
            <h2>Find movies</h2>
            <input type='text' value={props.movieSearch} onChange={props.handleMovieInput}/>
            <button onClick={handleMovieSubmit}>
                Something
            </button>
            <MovieResults movie={movie}/>
        </div>);
}

export default Movies;