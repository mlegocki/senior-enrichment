import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import store, { listToggle, putCampus, delCampus, delCampusStudents, resetStatus } from '../store';
import StudentsOfCampus from './StudentsOfCampus';

class CampusPage extends Component {
    constructor() {
        super();
    }

    componentWillUnmount() {
        const resetThunk = resetStatus();
        store.dispatch(resetThunk);
    }

    render() {

        return (
            <div>

                <div>
                    <h1 className="list-header">{this.props.campus.name} Campus</h1>
                    <h3 className="info-list in-line">Number of Students: </h3>
                    <h3 className="in-line">{this.props.studentsOfCampus.length}</h3>
                    <h3 className="info-list">Description:</h3>
                    <p>{this.props.campus.description}</p>
                </div>

                <button className="btn btn-primary submit-button" onClick={this.props.handleClick}>List of Students</button>

                <div>
                    {this.props.listStatus ? <StudentsOfCampus studentsOfCampus={this.props.studentsOfCampus} /> : ""}
                </div>

                <img src={this.props.campus.imageUrl} id="campus-page-img" />
                <h1>{this.props.listStatus}</h1>

                <div>

                    <h2>Edit the campus below:</h2>

                    <form id="campusUpdate" onSubmit={this.props.handleSubmit}>

                        <div className="form-entry">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter new campus name"
                                defaultValue={this.props.campus.name}
                                className="form-control"
                            />
                        </div>

                        <div className="form-entry">
                            <label>Campus Image</label>
                            <input
                                type="url"
                                name="imageUrl"
                                placeholder="Enter a campus image"
                                defaultValue={this.props.campus.imageUrl}
                                className="form-control"
                            />
                        </div>

                        <div className="form-entry">
                            <label>Description</label>
                            <textarea
                                type="text"
                                name="description"
                                placeholder="Enter a description for the campus"
                                rows="5"
                                cols="50"
                                defaultValue={this.props.campus.description}
                                className="form-control"
                            />
                        </div>

                        <div>

                            <div>
                                <button type="submit" className="btn btn-primary submit-button">Update campus entry</button>
                            </div>

                            <h3 id="warning" className="in-line">*WARNING*</h3>
                            <h3 className="in-line">Deleting a campus will delete all associated student records</h3>
                            <h3 id="warning" className="in-line">*WARNING*</h3>

                            <div>
                                <button type="button" className="btn btn-danger" onClick={this.props.handleDelete}>
                                    DELETE CAMPUS
                                </button>
                            </div>
                            
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
    const { listStatus } = state;

    return {
        campus,
        studentsOfCampus,
        listStatus
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {

    const campusId = Number(ownProps.match.params.campusId);
    const { history } = ownProps;

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
        },
        handleDelete(evt) {
            evt.preventDefault();
            dispatch(delCampusStudents(campusId));
            dispatch(delCampus(campusId));
            history.push('/campuses');
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CampusPage));