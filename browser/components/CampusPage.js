import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import store, { listToggle, putCampus } from '../store';
import StudentsOfCampus from './StudentsOfCampus';

class CampusPage extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h1>{this.props.campus.name}</h1>
                <h5>Number of Students: {this.props.studentsOfCampus.length}</h5>
                <p>{this.props.campus.description}</p>
                <button onClick={this.props.handleClick}>List of Students</button>
                <div>
                    {this.props.listStatus ? <StudentsOfCampus studentsOfCampus={this.props.studentsOfCampus} /> : ''}
                </div>
                <div>
                    <h3>Edit the campus below:</h3>
                        <form id="campusUpdate" onSubmit={this.props.handleSubmit}>
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter new campus name"
                                defaultValue={this.props.campus.name}
                            />
                            <label>Campus Image</label>
                            <input
                                type="url"
                                name="imageUrl"
                                placeholder="Enter a campus image"
                                defaultValue={this.props.campus.imageUrl}
                            />
                            <label>Description</label>
                            <textarea
                                type="text"
                                name="description"
                                placeholder="Enter a description for the campus"
                                rows="5"
                                cols="50"
                                defaultValue={this.props.campus.description}
                            />
                            <div>
                                <button type="submit">Update campus entry</button>
                            </div>
                        </form>
                </div>
            </div>
        )

    }
}

const mapStateToProps = function (state, ownProps) {

    const campusId = Number(ownProps.match.params.campusId);
    const campus = state.campuses.find(campus => campus.id === campusId)
    const studentsOfCampus = state.students.filter(student => student.campusId === Number(campusId));
    const listStatus = state.listStatus;

    return {
        campus,
        studentsOfCampus,
        listStatus
    };
}

const mapDispatchToProps = function (dispatch, ownProps) {
    const campusId = Number(ownProps.match.params.campusId);
    return {
        handleClick(evt) {
            evt.preventDefault();
            dispatch(listToggle());
        },
        handleSubmit(evt) {
            evt.preventDefault();
            const form = document.getElementById("campusUpdate");
            const updatedCampus = {
                id: campusId,
                name: evt.target.name.value,
                imageUrl: evt.target.imageUrl.value,
                description: evt.target.description.value
            };
            dispatch(putCampus(updatedCampus));
            form.reset();
        }
    }
}
    export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CampusPage));