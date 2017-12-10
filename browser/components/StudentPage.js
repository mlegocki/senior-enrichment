import React from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { delStudent } from '../store'

function StudentPage(props) {
    const { student, campus, handleDelete } = props;

    return (
        <div>
            <h1>{student.name}</h1>
            <h5>Attending Campus: {campus.name}</h5>
            <h5>Email: {student.email}</h5>
            <h5>GPA: {student.gpa}</h5>
            <h5>
                <NavLink to={`/update-student/${student.id}`}>Edit this student's information</NavLink>
            </h5>
            <button onClick={handleDelete}>DELETE STUDENT</button>
        </div>
    );
}

const mapStateToProps = function (state, ownProps) {

    const studentId = Number(ownProps.match.params.studentId);
    const student = state.students.find(student => student.id === studentId)
    const campus = state.campuses.find(campus => student.campusId === campus.id);

    return {
        student,
        campus
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {
    const studentId = Number(ownProps.match.params.studentId);

    return {
        handleDelete(evt) {
            evt.preventDefault();
            dispatch(delStudent(studentId));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentPage));