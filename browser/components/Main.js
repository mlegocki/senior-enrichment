import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import store, { fetchStudents } from '../store';
import StudentList from './StudentList';

export default class Main extends Component {
        
        componentDidMount() {
                const studentsThunk = fetchStudents();
                store.dispatch(studentsThunk);
        }
        render() {
                return (
                        <div>
                                <Route path="/students" component={StudentList} />
                        </div>

                );
        }
}