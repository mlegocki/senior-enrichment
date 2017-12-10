import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

function CampusList(props) {
    const { campuses } = props;
    return (
        <div>
            <button type="button" className="btn btn-primary">
                <NavLink to="/new-campus" id="add-campus-button">Add New Campus</NavLink>
            </button>
            <h1 className="list-header">List of Campuses:</h1>
            <ul>
                {
                    campuses.map(campus => {
                        return (
                            <NavLink to={`/campuses/${campus.id}`} key={campus.id} className="campus-item">
                                <li className="campus-list">
                                    {campus.name}
                                    <img src={campus.imageUrl} className="campus-list-image" />
                                </li>
                            </NavLink>
                        );
                    })
                }

            </ul>
        </div>
    )
}

const mapStateToProps = function (state) {
    const { campuses } = state;

    return {
        campuses
    };
};

export default withRouter(connect(mapStateToProps)(CampusList));