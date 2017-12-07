import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postStudent } from '../store';

function StudentCreate(props) {
    
    const { campuses, handleSubmit } = props

    return (
        <form id="studentForm" onSubmit={handleSubmit}>
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
                    type="email"
                    name="email"
                    placeholder="Enter student's email"
                />
                <label>GPA</label>
                <input
                    type="number"
                    name="gpa"
                    min="0"
                    max="4"
                    step="0.01"
                    placeholder="Enter student's GPA"
                />
                <label>Campus Selection</label>
                <select name="campus" required="true">
                    <option value="" disabled="true" defaultValue="true">Select a campus</option>
                    {
                        campuses.map(campus => {
                            return (
                                <option key={campus.id}>{campus.name}</option>
                            );
                        })
                    }
                </select>
            </div>
            <div>
                <button type="submit">Create student entry</button>
            </div>
        </form>
    );
}

const mapStateToProps = function (state) {
    return {
        campuses: state.campuses
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        handleSubmit(evt) {
            evt.preventDefault();
            const form = document.getElementById('studentForm');
            const newStudent =
                {
                    firstName: evt.target.firstName.value,
                    lastName: evt.target.lastName.value,
                    email: evt.target.email.value,
                    gpa: evt.target.gpa.value,
                    campus: evt.target.campus.value
                };
            dispatch(postStudent(newStudent));
            form.reset();
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentCreate));