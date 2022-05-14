import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useTutorialContext, {
  setTutorialContext,
} from "../contexts/useTutorialContext";
const shortid = require("shortid");

const AddTutorial = () => {
  const navigate = useNavigate();
  const tutorialGlobalState = useTutorialContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const save = () => {
    const newTutorials = tutorialGlobalState.tutorialsList;
    newTutorials.push({
      id: shortid.generate(),
      title: title,
      description: description,
    });
    setTutorialContext(newTutorials);
    navigate("/tutorials");
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

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
            value={title}
            onChange={handleChangeTitle}
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
            value={description}
            onChange={handleChangeDescription}
          />
        </div>

        <button className="btn btn-success" onClick={save}>
          Salvar
        </button>
      </div>
    </div>
  );
};

export default AddTutorial;
