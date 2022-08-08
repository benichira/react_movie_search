import React from 'react';
import './Home.css'
// import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";

import {useLocation} from 'react-router-dom';

function Home(props) {
    // const location = useLocation();
    // console.log('location--->', location.pathname)


    if (props.trendingMovies.length) {

        // console.log('props', props.trendingMovies.data.results)
        // props.handleUrlPath()


        return (<div className='home-container'>
            <h1>Trending</h1>
            <div className='recommendation-container'>
                {props.trendingMovies.slice(0, 18).map((movie) => (<Link key={movie.id} to={`/${movie.id}`}>
                    {/*{props.handleUrlPath(movie.title)}*/}
                    <div className='movie-card'>
                       <div className='img-cont'>
                        <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                       </div>
                        <h3>{movie.title}</h3>
                    </div>
                </Link>))}
            </div>
        </div>);
    }
}

export default Home;