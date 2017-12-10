import React from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { delStudent } from '../store'

function StudentPage(props) {
    const { student, campus, handleDelete, handleClick } = props;

    return (
        <div>

            <div>
                <h1 className="list-header">{student.name}</h1>

                <div>
                    <h3 className="info-list in-line">Attending Campus:</h3>
                    <h3 className="in-line">{campus.name}</h3>
                </div>

                <div>
                    <h3 className="info-list in-line">Email:</h3>
                    <h3 className="in-line">{student.email}</h3>
                </div>

                <div>
                    <h3 className="info-list in-line">GPA:</h3>
                    <h3 className="in-line">{student.gpa}</h3>
                </div>

                <h3>
                    <NavLink to={`/update-student/${student.id}`}>Edit Student's Information</NavLink>
                </h3>
            </div>

            <button className="btn btn-danger" onClick={handleDelete}>
                <NavLink to={'/students'} className="submit-button">
                    DELETE STUDENT
                </NavLink>
            </button>

        </div>
    );
}

const mapStateToProps = function (state, ownProps) {
    const studentId = Number(ownProps.match.params.studentId);
    const student = state.students.find(student => student.id === studentId);
    const campus = state.campuses.find(campus => student.campusId === campus.id);

    return {
        student,
        campus
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {
    const studentId = Number(ownProps.match.params.studentId);
    const btn = document.getElementById('myButton');

    return {
        handleDelete(evt) {
            evt.preventDefault();
            dispatch(delStudent(studentId));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentPage));