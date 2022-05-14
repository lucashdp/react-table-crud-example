import React from "react";

const Tutorial = (props) => {
  return (
    <div>
      <div className="edit-form">
        <h4>Tutorial</h4>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
            />
          </div>

          <div className="form-group">
            <label>
              <strong>Status:</strong>
            </label>
          </div>
        </form>
        <button className="badge badge-danger mr-2">Delete</button>
        <button type="submit" className="badge badge-success">
          Update
        </button>
      </div>
    </div>
  );
};

export default Tutorial;
