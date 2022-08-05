import React from 'react';
import "./MovieResults.css"
import {Link} from "react-router-dom";

const MovieResults = ({movie}) => {
    if (movie) {
        // console.log(movie)
        return (
            <div className='search-results'>
                {movie.data.results.slice(0, 10).map((item) => (
                    <Link key={item.id} to={`/${item.id}`}>
                        <div className='movie-results-card'>
                            <img src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}/>
                            <h3>
                                {item.original_title}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        );
    }
};

export default MovieResults;