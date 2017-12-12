import React from 'react';
import { NavLink } from 'react-router-dom';

export default function StudentsOfCampus(props) {

    const { studentsOfCampus } = props;

    return (
        <ul>
            {
                studentsOfCampus.map(student => {
                    return (
                        <NavLink to={`/students/${student.id}`}>
                            <li key={student.id} className="student-list">{student.name}</li>
                        </NavLink>
                    );
                })
            }
        </ul>
    );
}