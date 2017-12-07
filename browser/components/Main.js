import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import store, { fetchStudents } from '../store';

import Home from './Home';
import StudentList from './StudentList';
import StudentPage from './StudentPage';
import Navbar from './Navbar';

export default class Main extends Component {

        componentDidMount() {
                const studentsThunk = fetchStudents();
                store.dispatch(studentsThunk);
        }
        render() {
                return (
                        <div>
                                <Navbar />
                                <main>
                                        <Switch>
                                                <Route exact path="/" component={Home} />
                                                <Route exact path="/students" component={StudentList} />
                                                <Route path="/students/:studentId" component={StudentPage} />
                                        </Switch>
                                </main>
                        </div>

                );
        }
}