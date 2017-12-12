import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

function CampusList(props) {

    const { campuses, handleClick } = props;

    return (
        <div>
            <div>
                <button type="button" className="btn btn-primary" onClick={handleClick}>
                    Add New Campus
                </button>
            </div>
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

const mapDispatchToProps = function (state, ownProps) {
    const { history } = ownProps;
    return {
        handleClick(evt) {
            history.push('/new-campus');
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CampusList));