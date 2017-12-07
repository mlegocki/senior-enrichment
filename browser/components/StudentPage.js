import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function StudentPage(props) {
    const { student } = props;

    return (
        <div>
            <h1>{student.name}</h1>
            <h5>Attending Campus: </h5>
            <h5>Email: {student.email}</h5>
            <h5>GPA: {student.gpa}</h5>
        </div>
    );
}

const mapStateToProps = function (state, ownProps) {

    const studentId = Number(ownProps.match.params.studentId);

    return {
        student: state.students.find(student => student.id === studentId)
    };
};

export default withRouter(connect(mapStateToProps)(StudentPage));