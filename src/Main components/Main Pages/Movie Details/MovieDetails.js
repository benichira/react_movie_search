import React from 'react';
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import MovieDetailsCard from "./MovieDetailsCard";
import axios from "axios";

function MovieDetails({trendingMovies}) {
    const [movie, setMovie] = useState(null)
    const params = useParams();

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=9a99b30d21b8a588189ca7ab443a2d3d&language=en-US`)
            .then((res) => {
                if (res.data) {
                    setMovie(res.data)
                    console.log('res--->', res)
                }
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])
    // console.log('movie', movie)

    //OR YOU CAN DO IT THIS WAY
    // let selectedMovie = trendingMovies.find((item) => {
    //     if (item.id.toString() === params.movieId) {
    //         console.log(item)
    //         return item
    //     }
    //     return console.log('Movie not found :((((')
    // })

    return (
        <div>
            <MovieDetailsCard movie={movie}/>
        </div>);
    // }
}

export default MovieDetails;