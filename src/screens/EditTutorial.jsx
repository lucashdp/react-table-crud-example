import React, { useState } from "react";
import useTutorialContext, {
  setTutorialContext,
} from "../contexts/useTutorialContext";
import { useNavigate, useParams } from "react-router-dom";

const Tutorial = () => {
  const tutorialGlobalState = useTutorialContext();
  const navigate = useNavigate();
  const tutorialsMock = tutorialGlobalState.tutorialsList;
  const { tutorialId } = useParams();
  const tutorialToEdit = tutorialsMock.filter(
    (tutorial) => tutorial.id === tutorialId
  )[0];
  const [title, setTitle] = useState(tutorialToEdit.title);
  const [description, setDescription] = useState(tutorialToEdit.description);

  const update = () => {
    let arrayEdited = tutorialsMock;
    arrayEdited.map((tutorial) => {
      if (tutorial.id === tutorialId) {
        tutorial.title = title;
        tutorial.description = description;
      }
      return tutorial;
    });
    setTutorialContext(arrayEdited);
    navigate("/tutorials");
  };

  const deleteTutorials = () => {
    setTutorialContext(
      tutorialsMock.filter((tutorial) => tutorial.id !== tutorialId)
    );
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
