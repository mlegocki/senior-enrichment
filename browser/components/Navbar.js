import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import store from '../store';

export default function Navbar(props) {
    return (
        <nav>
            <span>
            <NavLink to="/">HOME</NavLink>
            </span>
            <span>
            <NavLink to="/students">STUDENTS</NavLink>
            </span>
        </nav>
    );
}


