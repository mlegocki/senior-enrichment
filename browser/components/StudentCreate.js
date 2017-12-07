import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import store, { postStudent } from '../store';

function StudentCreate() {

    return (
        <form>
            <div>
                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    placeholder="Enter student's first name"
                />
                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Enter student's last name"
                />
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    placeholder="Enter student's email"
                />                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    placeholder="Enter student's first name"
                />                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    placeholder="Enter student's first name"
                />
            </div>
            <div>
                <button type="submit">Create student entry</button>
            </div>
        </form>
    );
}

const mapStateToProps = function (state) {
    return {
    };
};

const mapDispatchToProps = function (state) {
    return {
        handleSubmit(evt) {
            evt.preventDefault();
            const firstName = evt.target.studentName.value;
            const lastName = evt.target.studentName.value;
            const email = evt.target.studentName.value;
            dispatch(postStudent)({ firstName, lastName, email })
        }
    };
};

export default withRouter(connect(mapStateToProps)(StudentCreate));