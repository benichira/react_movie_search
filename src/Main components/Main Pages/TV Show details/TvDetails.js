import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import './TvDetails.css'
import TvDetailsCard from "./TvDetailsCard";

const TvDetails = () => {
    const {tvId} = useParams();
    // console.log(tvId)
    const [show, setShow] = useState(null)
    // console.log("path--->", params.movieId)

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/tv/${tvId}?api_key=9a99b30d21b8a588189ca7ab443a2d3d&language=en-US`)
            .then((res) => {
                if (res.data) {
                    setShow(res.data)
                    // console.log('res--->', res)
                }
            })
            .catch((err) => {
                console.error(err)
            })
    }, [tvId])
    if (show) {
        // console.log('show--->', show)
        return (
            <div className='tv-results-cont'>
                <TvDetailsCard show={show}/>
            </div>
        );
    }
};

TvDetails.propTypes = {};

export default TvDetails;