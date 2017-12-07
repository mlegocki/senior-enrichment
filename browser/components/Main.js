import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import store, { fetchStudents, fetchCampuses } from '../store';

import Home from './Home';
import Navbar from './Navbar';
import StudentList from './StudentList';
import StudentPage from './StudentPage';
import StudentCreate from './StudentCreate';
import CampusList from './CampusList';

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
                                                <Route exact path="/campuses" component={CampusList} />
                                                <Route path="/campuses/:campusId" component={CampusPage} />
                                        </Switch>
                                </main>
                        </div>

                );
        }
}