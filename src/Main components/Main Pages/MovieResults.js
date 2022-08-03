import React from 'react';
import "./MovieResults.css"

const MovieResults = (props) => {
    if (props.movie) {
        return (
            <div className='search-results'>
                {props.movie.data.results.slice(0, 10).map((item) => (
                    <div>
                        <div>

                        </div>
                        <h3>
                            {item.original_title}
                        </h3>
                    </div>
                ))}
            </div>
        );
    }
};

export default MovieResults;