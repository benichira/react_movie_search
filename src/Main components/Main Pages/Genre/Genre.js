import React from 'react';
import axios from "axios";
import {useState, useEffect} from "react";
import './Genre.css'


function Genre(props) {

    const [genre, setGenre] = useState([])

    const [selectedGenre, setSelectedGenre] = useState(28);

    function handleGenreChange(id) {

        return setSelectedGenre(id)
    }

    console.log(selectedGenre)
    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=9a99b30d21b8a588189ca7ab443a2d3d&language=en-US`)
            .then((res) => {
                if (res.data && res.data.genres) {
                    setGenre(res.data.genres)
                }
                console.log(res)
            })
    }, [])

    if (genre.length) {
        return (
            <div className='genre-container'>
                <div className='genre-btns'>
                    {genre.map((item) => (
                        <button onClick={() => handleGenreChange(item.id)}>{item.name}</button>
                    ))}
                </div>
            </div>
        );
    }
}

export default Genre;