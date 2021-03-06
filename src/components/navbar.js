import React from 'react';
import {Link, NavLink} from "react-router-dom";

const  NavBar = ({ user }) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand" to="/">Vidly</Link>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/movies">Movies</NavLink>
                    <NavLink className="nav-item nav-link" to="/customers">Customers</NavLink>
                    <NavLink className="nav-item nav-link" to="/rentals">Rentals</NavLink>
                    {!user && (<>
                        <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
                        <NavLink className="nav-item nav-link" to="/register">Register</NavLink>
                    </>)}
                    {user && (<>
                        <NavLink className="nav-item nav-link" to="/profile">{user.name}</NavLink>
                        <NavLink className="nav-item nav-link" to="/logout">Logout</NavLink>
                    </>)}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;