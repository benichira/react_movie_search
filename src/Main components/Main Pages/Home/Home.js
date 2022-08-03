import React from 'react';
import './Home.css'
// import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";


function Home(props) {
    if (props.trendingMovies.length !== 0) {
        // console.log('props', props.trendingMovies.data.results)
        return (
            <div className='home-container'>
                <h1>Trending</h1>
                <hr/>
                <div className='recommendation-container'>
                    {
                        props.trendingMovies.data.results.slice(0, 18).map((movie) => (
                            <Link key={movie.id} to='/movie_details'>
                                <div className='movie-card'>{movie.media_type}</div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Home;