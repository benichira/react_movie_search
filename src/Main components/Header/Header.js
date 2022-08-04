import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className='header-container'>
            <div className='logo-container'>"Movies logo"</div>
            <div className='main-navigation'>
                <ul>
                    <div>
                        <Link to='/'>Home</Link>
                    </div>
                    <div>
                        <Link to='/genres'>Genre</Link>
                    </div>
                    <div>
                        <Link to='/movies'>Movies</Link>
                    </div>
                    <div>
                        <Link to='/TV_series'>TV Series</Link>
                    </div>
                    {/*<li>*/}
                    {/*    <Link to='/v'>Top ImBD</Link>*/}
                    {/*</li>*/}
                </ul>
            </div>
        </div>
    );
}

export default Header;