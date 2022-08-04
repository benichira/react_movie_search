import React from 'react';
import './MovieDetailsCard.css'
import RelatedMovies from "./RelatedMovies";

const MovieDetailsCard = ({movie}) => {
    if (movie) {

        return (
            <div>
                <div className='movie-container'>
                    <div className='movie-content'>
                        <div><img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                        </div>
                        <div className='movie-description'>
                            <h1>{movie.original_title}</h1>
                            <p>Description</p>
                            <h2>{movie.overview}</h2>
                            <p>{`Release date ${movie.release_date}`}</p>
                        </div>
                    </div>
                    <RelatedMovies movieId={movie.id}/>
                </div>
            </div>
        );
    }
};

export default MovieDetailsCard;