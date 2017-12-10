import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { putStudent } from '../store';

function StudentUpdate(props) {

    const { student, campuses, handleSubmit } = props;

    return (
        <form id="studentUpdate" className="form-group" onSubmit={handleSubmit}>
            <div className="form-entry">
                <label>First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    placeholder="Enter student's first name"
                    defaultValue={student.firstName}
                    className="form-control"
                />
            </div>
            <div className="form-entry">
                <label>Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Enter student's last name"
                    defaultValue={student.lastName}
                    className="form-control"
                />
            </div>
            <div className="form-entry">
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter student's email"
                    defaultValue={student.email}
                    className="form-control"
                />
            </div>
            <div className="form-entry">
                <label>GPA:</label>
                <input
                    type="number"
                    name="gpa"
                    min="0"
                    max="4"
                    step="0.01"
                    placeholder="Enter student's GPA"
                    defaultValue={student.gpa}
                    className="form-control"
                />
            </div>
            <div className="form-entry">
                <label>Campus Selection:</label>
                <select name="campus" required="true" className="form-control">
                    {
                        campuses.map(campus => {
                            if (campus.id === student.campusId) {
                                return (
                                    <option key={campus.id} value={campus.id} selected>{campus.name}</option>
                                )
                            } else {
                                return (<option key={campus.id} value={campus.id}>{campus.name}</option>
                                )
                            }
                        })
                    }
                </select>
            </div>
        <div>
            <button type="submit" className="btn btn-primary submit-button">Update student entry</button>
        </div>
        </form >
    );
}

const mapStateToProps = function (state, ownProps) {

    const studentId = Number(ownProps.match.params.studentId);
    const student = state.students.find(student => student.id === studentId);
    const { campuses } = state;

    return {
        student,
        campuses
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {
    const studentId = Number(ownProps.match.params.studentId);

    return {
        handleSubmit(evt) {
            evt.preventDefault();
            const updatedStudent =
                {
                    id: studentId,
                    firstName: evt.target.firstName.value,
                    lastName: evt.target.lastName.value,
                    email: evt.target.email.value,
                    gpa: evt.target.gpa.value,
                    campusId: Number(evt.target.campus.value)
                };
            dispatch(putStudent(updatedStudent));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentUpdate));