import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postCampus } from '../store';

function CampusCreate(props) {
    const { handleSubmit } = props;
    return (
        <div>
            <form id="campusForm" onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter new campus name"
                />
                <label>Campus Image</label>
                <input
                    type="url"
                    name="imageUrl"
                    placeholder="Enter a campus image"
                />
                <label>Description</label>
                <textarea
                    type="text"
                    name="description"
                    placeholder="Enter a description for the campus"
                    rows="5"
                    cols="50"
                />
                <div>
                    <button type="submit">Create campus entry</button>
                </div>
            </form>
        </div>
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