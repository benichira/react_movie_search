import React from 'react';
import axios from "axios";
import {useState, useEffect} from "react";
// import MovieDetails from "../Movie Details/MovieDetails";
import MovieResults from "../MovieResults";
import "./Movies.css"

function Movies({movieSearch, handleMovieInput}) {
    const [movie, setMovie] = useState(null)
    const [query, setQuery] = useState('')


    function handleMovieSubmit() {
        // setQuery()
        axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=9a99b30d21b8a588189ca7ab443a2d3d&language=en-US&query=${movieSearch}&page=1&include_adult=false`)
            .then((res) => {
                // console.log('searched movie', res)
                setMovie(res)
                // setFinishedSearch(false)
            })
            .catch((errors) => {
                console.error(errors);
            });
    }

    return (
        <div className='movies-wrapper'>
            <h2>Find movies</h2>
            <div className='input-container'>
                <input type='text' value={movieSearch} onChange={handleMovieInput}/>
                <button onClick={handleMovieSubmit}>
                    Search
                </button>
            </div>
            <MovieResults movie={movie}/>
        </div>);
}

export default Movies;