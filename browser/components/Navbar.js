import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <span>
                <NavLink to="/">HOME</NavLink>
            </span>

            <span>
                <NavLink to="/students">STUDENTS</NavLink>
            </span>

            <span>
                <NavLink to="/campuses">CAMPUSES</NavLink>
            </span>

        </nav>
    );
}


