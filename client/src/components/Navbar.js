import React from 'react';

const Navbar = () => {
    return (
        <div className='container'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Poke Home</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Guess That Pokemon</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Type Facts</a>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    )
};

export default Navbar;