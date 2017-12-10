import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postCampus } from '../store';

function CampusCreate(props) {

    const { handleSubmit } = props;

    return (
        <form id="campusForm" onSubmit={handleSubmit}>

            <div className="form-entry">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter new campus name"
                    className="form-control"
                />
            </div>

            <div className="form-entry">
                <label>Campus Image</label>
                <input
                    type="url"
                    name="imageUrl"
                    placeholder="Enter a campus image"
                    className="form-control"
                />
            </div>

            <div className="form-entry">
                <label>Description</label>
                <textarea
                    type="text"
                    name="description"
                    placeholder="Enter a description for the campus"
                    rows="5"
                    cols="50"
                    className="form-control"
                />
            </div>

            <div>
                <button type="submit" className="btn btn-primary submit-button">
                    Create campus entry
                    </button>
            </div>

        </form>
    )
}

const mapDispatchToState = function (dispatch) {

    return {
        handleSubmit(evt) {
            evt.preventDefault();
            const form = document.getElementById('campusForm');
            const newCampus = {
                name: evt.target.name.value,
                imageUrl: evt.target.imageUrl.value,
                description: evt.target.description.value
            };
            dispatch(postCampus(newCampus));
            form.reset();
        }
    };
}

export default withRouter(connect(null, mapDispatchToState)(CampusCreate));