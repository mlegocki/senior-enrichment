import React from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

function StudentList(props) {
    
    const { students, handleClick } = props;

    return (
        <div>

            <button type="button" className="btn btn-primary" onClick={handleClick}>
                Add New Student
            </button>
            <h1 className="list-header">List of Current Students:</h1>

            <ul>
                {
                    students.map(student => {
                        return (
                            <NavLink to={`/students/${student.id}`} key={student.id}>
                                <li className="student-list">
                                    {student.name}
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
    const { students } = state;

    return {
        students
    };
};

const mapDispatchToProps = function (state, ownProps) {
    const { history } = ownProps;

    return {
        handleClick(evt) {
            history.push('/new-student');
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentList));