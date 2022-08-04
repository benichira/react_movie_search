import React from 'react';
import './MovieDetailsCard.css'
import {useEffect, useState} from "react";
import axios from "axios";

const RelatedMovies = ({movieId}) => {
    const [relatedMovies, setRelatedMovies] = useState([])


    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=9a99b30d21b8a588189ca7ab443a2d3d&language=en-US&page=1`)
            .then((res) => {
                // console.log('related movies', res)
                if (res.data && res.data.results) {
                    setRelatedMovies(res.data.results.slice(0, 20))
                }

            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    return (
        <div className='related-movies-container'>
            {relatedMovies.map((movie) => (
                <div key={movie.id}>
                    <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                    <p>{movie.title}</p>
                </div>
            ))}
        </div>
    );
};

export default RelatedMovies;