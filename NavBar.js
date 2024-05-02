import React from 'react';
import '../style/style.css';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light custom-navbar sticky-top">
            <div className="container">
                <Link to="/" className="navbar-brand"><img src="https://th.bing.com/th/id/R.df7acb6432044804380448ecbe85962e?rik=PpwyDI2FMURseQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fcalculator%2fcalculator_PNG7933.png&ehk=GpnNRVx0jsYBjqmzhhr3aRpnchqLX4ckkiFxFHTQy8g%3d&risl=&pid=ImgRaw&r=0" className="logo" />Calculator</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-lg-end" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Головна</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">Про сайт</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-in" className="nav-link">Реєстрація</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/log-in" className="nav-link">Вхід</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
