import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" ><Link to={'/'}>Poke Home</Link></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link"><Link to={'/guess'}>Guess That Pokemon</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link to={'/pokemon'}>Pokemon List</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link to={'/pokemonCards'}>Pokemon Cards</Link></a>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    )
};

export default Navbar;