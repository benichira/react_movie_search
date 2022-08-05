import React from 'react';
import axios from "axios";
import {useState, useEffect} from "react";
import './TVSeries.css'
import TvShowsResults from "../TvShowsResults";

function TvSeries({showSearch, handleTvShowInput}) {
    const [tvSeries, setTvSerie] = useState(null)

    // const [showSearch, setShowSearch] = useState(false)

    // function handleShowsSubmit() {
    //     setShowSearch(!showSearch)
    //     // console.log()
    // }


    useEffect(() => {
        if (!showSearch) {
            return
        }
        //implement debounce
        axios
            // .get(`https://api.themoviedb.org/3/search/tv?api_key=9a99b30d21b8a588189ca7ab443a2d3d&language=en-US&page=1&query=${showSearch}&include_adult=false`)
            .get(`https://api.themoviedb.org/3/search/tv?api_key=9a99b30d21b8a588189ca7ab443a2d3d&language=en-US&page=1&query=${showSearch}&include_adult=false`)
            .then((res) => {
                console.log('res', res)
                setTvSerie(res)
            })
            .catch((errors) => {
                console.error(errors);
            });
    }, [showSearch])

    console.log('tvseries--->', tvSeries)

    return (
        <div className='shows-wrapper'>
            <h2>Find whatever tv show you want</h2>
            <input
                value={showSearch}
                onChange={handleTvShowInput}
                type='text'
            />
            {/*<button*/}
            {/*    onClick={handleShowsSubmit}*/}
            {/*>*/}
            {/*    Search*/}
            {/*</button>*/}
            <TvShowsResults show={tvSeries}/>
        </div>
    );
}

export default TvSeries;