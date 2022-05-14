import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons";

const tutorialsMock = [
  {
    id: "1sadf918asdf918sad",
    title: "React",
    description: "O tutorial de React funciona assim ...",
  },
  {
    id: "2sadf918asdf918sad",
    title: "NodeJS",
    description: "O tutorial de NodeJS funciona assim ...",
  },
  {
    id: "3sadf918asdf918sad",
    title: ".NET",
    description: "O tutorial de .NET funciona assim ...",
  },
  {
    id: "4sadf918asdf918sad",
    title: "Angular",
    description: "O tutorial de Angular funciona assim ...",
  },
];

const TutorialsList = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTutorials(tutorialsMock);
    }, 1000);
  }, []);

  const removeAll = () => {
    setTutorials([]);
  };

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
            <button className="btn btn-outline-secondary" type="button">
              Search
            </button>
          </div>
        </div>
      </div>
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
                  <AiOutlineDelete />
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
