import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className='header-container'>
            <div className='logo-container'>"Movies logo"</div>
            <div className='main-navigation'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/genres'>Genre</Link>
                    </li>
                    <li>
                        <Link to='/country'>Country</Link>
                    </li>
                    <li>
                        <Link to='/movies'>Movies</Link>
                    </li>
                    <li>
                        <Link to='/TV_series'>TV Series</Link>
                    </li>
                    {/*<li>*/}
                    {/*    <Link to='/v'>Top ImBD</Link>*/}
                    {/*</li>*/}
                </ul>
            </div>
        </div>
    );
}

export default Header;