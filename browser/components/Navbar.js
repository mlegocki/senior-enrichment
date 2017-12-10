import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {

    return (
        <div>

            <nav className="navbar">
                <img src="https://cdn-images-1.medium.com/max/1600/1*emiGsBgJu2KHWyjluhKXQw.png" className="nav-logo" />
                <NavLink to="/" className="nav-item">HOME</NavLink>
                <NavLink to="/students" className="nav-item">STUDENTS</NavLink>
                <NavLink to="/campuses" className="nav-item">CAMPUSES</NavLink>
            </nav>

        </div>
    );
}


