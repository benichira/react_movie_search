import {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import axios from 'axios';
//Components
import Home from "./Main components/Main Pages/Home/Home"
import Header from "./Main components/Header/Header"
import MovieResults from "./Main components/Main Pages/MovieResults";
import Genre from "./Main components/Main Pages/Genre/Genre"
import TvSeries from "./Main components/Main Pages/TV Series/TVSeries";
import Movies from "./Main components/Main Pages/Movies/Movies";
import MovieDetails from "./Main components/Main Pages/Movie Details/MovieDetails";

function App(props) {
    const [trendingMovies, setTrending] = useState([])
    const [movieGenres, setGenres] = useState([])
    const [movieSearch, setMovieSearch] = useState('')
    const [showSearch, setShowSearch] = useState('')
    // const [searchedMovie, setSearchedMovie] = useState('')
    // const [finishedSearch, setFinishedSearch] = useState(false)
    const [urlPath, setUrlPath] = useState('')
    // const [movieSpecs, setMovieSpect] = useState(null)


    // const [loading, setLoading] = useState(false)
    function handleTvShowInput(e) {
        e.preventDefault();
        setShowSearch(e.target.value)
        // console.log('showSearch', showSearch)
    }

    // function getTrendingMovies(){
    //
    // }

    function handleUrlPath(path) {
        // if(path===)
        setUrlPath(path);
        console.log('path-------->', path)
    }

    function handleMovieInput(e) {
        e.preventDefault();
        setMovieSearch(e.target.value);
    }

    let trending = "https://api.themoviedb.org/3/trending/all/day?api_key=9a99b30d21b8a588189ca7ab443a2d3d";
    let genres = "https://api.themoviedb.org/3/genre/movie/list?api_key=9a99b30d21b8a588189ca7ab443a2d3d&language=en-US";

    const requestOne = axios.get(trending);
    const requestTwo = axios.get(genres);
    // const requestThree = axios.get(three);

    useEffect(() => {
        // setLoading(true);
        axios
            .all([requestOne, requestTwo])
            .then(axios.spread((...responses) => {
                const responseOne = responses[0];
                const responseTwo = responses[1];
                // console.log(responseOne);
                // console.log(responseTwo);

                if (responseOne.data && responseOne.data.results) {
                    setTrending(responseOne.data.results)
                }
                //does the same thing as above, check s if value is either null or undefined, it's called CHAINING OPERATOR
                // setTrending(responseOne?.data?.results)

                setGenres(responseTwo)
                // setLoading(false);
            }))

            .catch((errors) => {
                // react on errors.
                console.error(errors);
            });

    }, [])

    // useEffect(() => {
    //     axios
    //         .get(`https://api.themoviedb.org/3/movie/${movieSearch}?api_key=9a99b30d21b8a588189ca7ab443a2d3d&language=en-US`)
    //         .then((res) => {
    //             console.log('searched movie', res)
    //         })
    //         .catch((errors) => {
    //             // react on errors.
    //             console.error(errors);
    //         });
    // }, [finishedSearch])
    // console.log('genres--->', movieGenres)
    // console.log('trendingMovies--->', trendingMovies);

    return (<div className='body'>
        <Header/>
        <Routes>
            <Route path="/" element={<Home
                handleUrlPath={handleUrlPath}
                trendingMovies={trendingMovies}/>}
            ></Route>
            <Route path="/movies" element={<Movies
                movieSearch={movieSearch}
                // handleMovieSubmit={handleMovieSubmit}
                handleMovieInput={handleMovieInput}
                movieSearch={movieSearch}
            />}></Route>
            <Route path="/genres" element={<Genre movieGenres={movieGenres}/>}></Route>
            {/*<Route path="/top_movies" element={<TopImbd/>}></Route>*/}
            <Route path="/TV_series" element={<TvSeries
                showSearch={showSearch}
                handleTvShowInput={handleTvShowInput}
            />}></Route>
            {/*<Route path="/country" element={<Country/>}></Route>*/}
            <Route
                path={`/:movieId`}
                element={<MovieDetails
                    handleUrlPath={handleUrlPath}
                    trendingMovies={trendingMovies}
                />}>
            </Route>
        </Routes>
    </div>);
}

export default App;
