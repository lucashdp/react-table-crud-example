import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getTutorials, deleteTutorialsById } from "../api";

const TutorialsList = () => {
  const navigate = useNavigate();
  const [tutorials, setTutorials] = useState([]);
  const [tutorialsDefault, setTutorialsDefault] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getTutorialsApi = async () => {
      const tutorialsResult = await getTutorials();
      setTutorials(tutorialsResult.data);
      setTutorialsDefault(tutorialsResult.data);
    };
    getTutorialsApi();
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
    setTutorials(
      tutorialsDefault.filter(
        (tutorial) =>
          tutorial.description.toLowerCase().includes(event.target.value) ||
          tutorial.title.toLowerCase().includes(event.target.value)
      )
    );
  };

  const remove = async (id) => {
    await deleteTutorialsById(id);
    setTutorials(tutorials.filter((tutorial) => tutorial._id !== id));
  };

  const edit = (id) => {
    navigate(`/tutorials/edit/${id}`);
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
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <a
                      href
                      role="button"
                      id={tutorial.id}
                      onClick={() => remove(tutorial._id)}
                    >
                      <AiOutlineDelete />
                    </a>
                    <div style={{ paddingRight: "10px" }}></div>
                    <a
                      href
                      role="button"
                      id={tutorial.id}
                      onClick={() => edit(tutorial._id)}
                    >
                      <FaEdit />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TutorialsList;
