import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import store, { fetchStudents } from '../store';

function StudentList(props) {
    return (
        <h1>HELLO</h1>
        // <ul>
        //     {
        //         students.map(student => {
        //             return (
        //                 <li key={student.id}>
        //                     <span> {student.firstName} </span>
        //                 </li>
        //             );
        //         })
        //     }
        // </ul>
    );
}

const mapStateToProps = function (state) {
    console.log(state);
    return {
        students: state.students
    };
};

export default withRouter(connect(mapStateToProps)(StudentList));