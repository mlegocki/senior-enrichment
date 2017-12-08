import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import store, { listToggle, resetStatus } from '../store';
import StudentsOfCampus from './StudentsOfCampus';

class CampusPage extends Component {
    constructor() {
        super();
    }
    componentWillUnmount() {
        const statusThunk = resetStatus();
        store.dispatch(statusThunk);
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

const mapDispatchToProps = function (dispatch) {
    return {
        handleClick(evt) {
            evt.preventDefault();
            dispatch(listToggle());
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CampusPage));