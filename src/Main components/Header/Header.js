import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className='header-container'>
            <div className='logo-container'>"Movies logo"</div>
            <div className='main-navigation'>
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/genres'>Genre</Link>
                    <Link to='/movies'>Movies</Link>
                    <Link to='/TV_series'>TV Series</Link>
                    {/*<li>*/}
                    {/*    <Link to='/v'>Top ImBD</Link>*/}
                    {/*</li>*/}
                </ul>
            </div>
        </div>
    );
}

export default Header;