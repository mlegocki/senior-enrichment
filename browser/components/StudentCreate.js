import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postStudent } from '../store';

function StudentCreate(props) {

    const { campuses, handleSubmit } = props

    return (
        <form id="studentForm" onSubmit={handleSubmit}>

            <div className="form-entry">
                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    placeholder="Enter student's first name"
                    className="form-control"
                />
            </div>

            <div className="form-entry">
                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Enter student's last name"
                    className="form-control"
                />
            </div>

            <div className="form-entry">
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter student's email"
                    className="form-control"
                />
            </div>

            <div className="form-entry">
                <label>GPA</label>
                <input
                    type="number"
                    name="gpa"
                    min="0"
                    max="4"
                    step="0.01"
                    placeholder="Enter student's GPA"
                    className="form-control"
                />
            </div>

            <div className="form-entry">
                <label>Campus Selection</label>
                <select id="campusSelect" name="campus" required="true" className="form-control">
                    <option name="default" value="" disabled="true" selected>Select a campus</option>
                    {
                        campuses.map(campus => {
                            return (
                                <option key={campus.id} value={campus.id}>{campus.name}</option>
                            );
                        })
                    }
                </select>
            </div>

            <div>
                <button type="submit" className="btn btn-primary submit-button">
                    Create Student Entry
                </button>
            </div>

        </form>
    );
}

const resetOption = function () {
    document.getElementById("campusSelect").selectedIndex = 0;
    return true;
};

const mapStateToProps = function (state) {
    const { campuses } = state
    return {
        campuses
    };
};


const mapDispatchToProps = function (dispatch) {
    return {
        handleSubmit(evt) {
            evt.preventDefault();
            const form = document.getElementById('studentForm');
            const campusSelect = document.getElementById('campusSelect');
            const newStudent =
                {
                    firstName: evt.target.firstName.value,
                    lastName: evt.target.lastName.value,
                    email: evt.target.email.value,
                    gpa: evt.target.gpa.value,
                    campusId: evt.target.campus.value
                };
            dispatch(postStudent(newStudent));
            alert('You successfully created a new student!');
            form.reset();
            resetOption();
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentCreate));