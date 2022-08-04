import React from 'react';
import {useState} from "react";
import {useParams} from 'react-router-dom';
import MovieDetailsCard from "./MovieDetailsCard";

function MovieDetails({trendingMovies}) {

    const params = useParams();

    let selectedMovie = trendingMovies.find((item) => {
        if (item.id.toString() === params.movieId) {
            console.log(item)
            return item
        }
        return console.log('Movie not found :((((')
    })

    return (<div>
        <MovieDetailsCard movie={selectedMovie}/>
    </div>);
    // }
}

export default MovieDetails;