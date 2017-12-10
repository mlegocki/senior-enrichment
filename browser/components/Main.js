import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import store, { fetchStudents, fetchCampuses } from '../store';

import Home from './Home';
import Navbar from './Navbar';

import StudentList from './StudentList';
import StudentPage from './StudentPage';
import StudentCreate from './StudentCreate';
import StudentUpdate from './StudentUpdate';

import CampusList from './CampusList';
import CampusPage from './CampusPage';
import CampusCreate from './CampusCreate';

export default class Main extends Component {

        componentDidMount() {
                const studentsThunk = fetchStudents();
                const campusesThunk = fetchCampuses();
                store.dispatch(studentsThunk);
                store.dispatch(campusesThunk);
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
                                                <Route path="/new-student" component={StudentCreate} />
                                                <Route path="/update-student/:studentId" component={StudentUpdate} />

                                                <Route exact path="/campuses" component={CampusList} />
                                                <Route path="/campuses/:campusId" component={CampusPage} />
                                                <Route path="/new-campus" component={CampusCreate} />
                                        </Switch>
                                </main>
                        </div>

                );
        }
}