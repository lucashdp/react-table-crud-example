import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  getTutorialsById,
  updateTutorialsById,
  deleteTutorialsById,
} from "../api";

const Tutorial = () => {
  const navigate = useNavigate();
  const { tutorialId } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getTutorialsApi = async () => {
      const tutorialsResult = await getTutorialsById(tutorialId);
      setTitle(tutorialsResult.data.title);
      setDescription(tutorialsResult.data.description);
    };
    getTutorialsApi();
  }, [tutorialId]);

  const update = async () => {
    const tutorialToEdit = {
      title: title,
      description: description,
    };
    await updateTutorialsById(tutorialId, tutorialToEdit);
    navigate("/tutorials");
  };

  const deleteTutorials = async () => {
    await deleteTutorialsById(tutorialId);
    navigate("/tutorials");
  };

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
              value={title}
              onChange={({ target }) => setTitle(target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={description}
              onChange={({ target }) => setDescription(target.value)}
            />
          </div>

          <div className="form-group">
            <label>
              <strong>Status:</strong>
            </label>
          </div>
        </form>
        <button
          type="button"
          className="badge badge-danger mr-2"
          onClick={deleteTutorials}
        >
          Delete
        </button>
        <button type="button" className="badge badge-success" onClick={update}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Tutorial;
