import React from "react";

const AddTutorial = () => {
  return (
    <div className="submit-form">
      <div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            required
            name="title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            required
            name="description"
          />
        </div>

        <button className="btn btn-success">Submit</button>
      </div>
    </div>
  );
};

export default AddTutorial;
