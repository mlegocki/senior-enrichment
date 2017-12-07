import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function CampusPage(props) {
    const { campus } = props;
    
    return (
        <div>
            <h1>{campus.name}</h1>
            <p>{campus.description}</p>
        </div>
    )
}

const mapStateToProps = function (state, ownProps) {

    const campusId = Number(ownProps.match.params.campusId);

    return {
        campus: state.campuses.find(campus => campus.id === campusId)
    }
}

export default withRouter(connect(mapStateToProps)(CampusPage));