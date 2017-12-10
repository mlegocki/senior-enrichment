import React from 'react';

export default function StudentsOfCampus(props) {
    const { studentsOfCampus } = props;
    return (
        <ul>
            {
                studentsOfCampus.map(student => {
                    return (
                        <li key={student.id}>{student.name}</li>
                    );
                })
            }
        </ul>
    );
}