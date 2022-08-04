import React from 'react';
import './TvShowsResults.css';
import {Link} from "react-router-dom";

const TvShowsResults = (props) => {
    if (props.show) {
        console.log(props.show)
        return (
            <div className='search-results'>
                {props.show.data.results.slice(0, 10).map((item) => (
                    <Link key={item.id} to={`/${item.id}`}>
                        <div key={item.id}>
                            <div>

                            </div>
                            <h3>
                                {item.original_name}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        );
    }
};

export default TvShowsResults;