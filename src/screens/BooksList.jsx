import React from "react";

const TutorialsList = (props) => {
  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-12 list">
        <table
          className="table table-striped table-bordered"
        >
          <thead>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>

      <div className="col-md-8">
        <button className="btn btn-sm btn-danger">
          Remove All
        </button>
      </div>
    </div>
  );
};

export default TutorialsList;
