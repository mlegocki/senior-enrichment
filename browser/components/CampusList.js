import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

function CampusList(props) {
    const { campuses } = props;
    return (
        <div>
            <ul>
                {
                    campuses.map(campus => {
                        return (
                            <NavLink to={`/campuses/${campus.id}`} key={campus.id}>
                                <li>
                                    <h4>{campus.name}</h4>
                                    <img src={campus.imageUrl} />
                                </li>
                            </NavLink>
                        );
                    })
                }
                <li>
                    <NavLink to="/new-campus">Create a new campus entry</NavLink>
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = function (state) {
    return {
        campuses: state.campuses
    };
};

export default withRouter(connect(mapStateToProps)(CampusList));