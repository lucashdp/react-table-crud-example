const axios = require("axios");
const token = localStorage.getItem("token");
const headers = { Authorization: `Bearer ${token}` };

exports.getTutorials = async () => {
  return await axios.get(`http://localhost:8001/v1/public/tutorials`, headers);
};

exports.getTutorialsById = async (tutorialId) => {
  return await axios.get(
    `http://localhost:8001/v1/public/tutorials/${tutorialId}`,
    headers
  );
};

exports.updateTutorialsById = async (tutorialId, tutorialToEdit) => {
  return await axios.request({
    method: "PUT",
    url: `http://localhost:8001/v1/public/tutorials/${tutorialId}`,
    data: tutorialToEdit,
    headers,
  });
};

exports.deleteTutorialsById = async (tutorialId) => {
  return await axios.request({
    method: "DELETE",
    url: `http://localhost:8001/v1/public/tutorials/${tutorialId}`,
    headers,
  });
};

exports.createTutorials = async (newTutorial) => {
  return await axios.request({
    method: "POST",
    url: `http://localhost:8001/v1/public/tutorials`,
    data: newTutorial,
    headers,
  });
};
