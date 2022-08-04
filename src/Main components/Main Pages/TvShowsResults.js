import React from 'react';
import './TvShowsResults.css'

const TvShowsResults = (props) => {
    if (props.show) {
        console.log(props.show)
        return (
            <div className='search-results'>
                {props.show.data.results.slice(0, 10).map((item) => (
                    <div key={item.id}>
                        <div>

                        </div>
                        <h3>
                            {item.original_name}
                        </h3>
                    </div>
                ))}
            </div>
        );
    }
};

export default TvShowsResults;