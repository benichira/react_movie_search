import React from 'react';
import RelatedMovies from "../Movie Details/RelatedMovies";

const TvDetailsCard = ({show}) => {
    if (show) {

        return (
            <div>
                <div className='movie-container'>
                    <div className='movie-content'>
                        <div><img src={`http://image.tmdb.org/t/p/w500/${show.poster_path}`}/>
                        </div>
                        <div className='movie-description'>
                            <h1>{show.original_name}</h1>
                            <p>Description</p>
                            <h3>{show.overview}</h3>
                            <p>{`Release date ${show.first_air_date}`}</p>
                            <p>{`Status: ${show.status}`}</p>
                            <p>{`Seasons: ${show.number_of_seasons} | Episodes: ${show.number_of_episodes}`}</p>
                        </div>
                    </div>
                    {/*<RelatedMovies movieId={show.id}/>*/}
                </div>
            </div>
        );
    }
};

export default TvDetailsCard;