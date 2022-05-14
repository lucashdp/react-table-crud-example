import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import useTutorialContext from "../contexts/useTutorialContext";

const TutorialsList = () => {
  const tutorialGlobalState = useTutorialContext();
  const tutorialsMock = tutorialGlobalState.tutorialsList;
  const [tutorials, setTutorials] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setTutorials(tutorialsMock);
    }, 1000);
  }, []);

  const removeAll = () => {
    setTutorials([]);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
    setTutorials(
      tutorialsMock.filter(
        (tutorial) =>
          tutorial.description.toLowerCase().includes(event.target.value) ||
          tutorial.title.toLowerCase().includes(event.target.value)
      )
    );
  };

  const remove = (event) => {
    setTutorials(
      tutorials.filter((tutorial) => tutorial.id !== event.target.id)
    );
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={search}
            onChange={handleChange}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Buscar
            </button>
          </div>
        </div>
      </div>
      {search}
      <div className="col-md-12 list">
        <table className="table table-striped table-bordered">
          <thead>
            <th>Título</th>
            <th>Descrição</th>
            <th>Ações</th>
          </thead>
          <tbody>
            {tutorials.map((tutorial) => (
              <tr>
                <td>{tutorial.title}</td>
                <td>{tutorial.description}</td>
                <td>
                  <AiOutlineDelete
                    id={tutorial.id}
                    role="button"
                    onClick={remove}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="col-md-8">
        <button className="btn btn-sm btn-danger" onClick={removeAll}>
          Remove All
        </button>
      </div>
    </div>
  );
};

export default TutorialsList;
