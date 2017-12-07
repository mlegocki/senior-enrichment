import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import store from '../store';

export default function Home() {
    return (
        <div>
            <h1>Welcome to MHIACJ!</h1>
            <h3>Margaret Hamilton Interplanetary Academy of JavaScript</h3>
        </div>
    );
}


