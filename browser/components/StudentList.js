import React from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import store, { fetchStudents } from '../store';

function StudentList(props) {
    const { students } = props;
    return (
        <ul>
            {
                students.map(student => {
                    return (
                            <NavLink to={`/students/${student.id}`} key={student.id}>
                                <li>
                                    <span> {student.firstName} </span>
                                </li>
                            </NavLink>
                    );
                })
            }
            <li>
            <NavLink to="/new-student">Create a new student entry</NavLink>
            </li>
        </ul>
    );
}

const mapStateToProps = function (state) {
    return {
        students: state.students
    };
};

export default withRouter(connect(mapStateToProps)(StudentList));