import React from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

function StudentList(props) {
    const { students } = props;

    return (
        <div>
            <button type="button" className="btn btn-primary">
                <NavLink to="/new-student" id="add-student-button">Add New Student</NavLink>
            </button>
            <h1 className="list-header">List of Current Students:</h1>
            <ul>
                {
                    students.map(student => {
                        return (
                            <NavLink to={`/students/${student.id}`} key={student.id}>
                                <li className="student-list">
                                    {student.firstName}
                                </li>
                            </NavLink>
                        );
                    })
                }
            </ul>
        </div>
    );
}

const mapStateToProps = function (state) {
    const { students } = state
    return {
        students
    };
};

export default withRouter(connect(mapStateToProps)(StudentList));