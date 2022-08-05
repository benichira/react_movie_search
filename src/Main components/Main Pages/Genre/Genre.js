import React from 'react';
import axios from "axios";
import {useState, useEffect} from "react";
import './Genre.css'
import {Link} from 'react-router-dom'


function Genre(props) {


    const [genre, setGenre] = useState([])
    const [selectedGenreId, setSelectedGenreId] = useState(28);
    const [selectedGenreName, setSelectedGenreName] = useState('Action')
    const [genreQuery, setGenryQuery] = useState([])

    function handleGenreChange(id, name) {
        setSelectedGenreName(name)
        setSelectedGenreId(id)
    }

    // console.log(selectedGenre)
    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=9a99b30d21b8a588189ca7ab443a2d3d&language=en-US`)
            .then((res) => {
                if (res.data && res.data.genres) {
                    setGenre(res.data.genres)
                }
                // console.log(res)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/discover/movie?api_key=9a99b30d21b8a588189ca7ab443a2d3d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${selectedGenreId}&with_watch_monetization_types=flatrate`)
            .then((res) => {
                console.log('res', res)
                // if (res.data && res.data.results) {
                setGenryQuery(res?.data?.results)
                // }
            })
            .catch((err) => {
                console.error(err)
            })
    }, [selectedGenreId])

    if (genre.length) {
        return (<div className='genre-container'>
            <div className='genre-btns'>
                {genre.map((item) => (
                    <button key={item.id} onClick={() => handleGenreChange(item.id, item.name)}>{item.name}</button>))}
            </div>
            <h1>{selectedGenreName}</h1>
            <div className='genre-results-container'>
                {genreQuery.map((movie) => (
                    <Link key={movie.id} to={`/${movie.id}`}>
                        <div className='genre-card'>
                            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                            <h3>{movie.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>);
    }
}

export default Genre;