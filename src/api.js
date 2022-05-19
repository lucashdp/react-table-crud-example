const axios = require("axios");

exports.getTutorials = async () => {
  const token = localStorage.getItem("token");
  const headers = { Authorization: `Bearer ${token}` };
  return await axios.get(`http://localhost:8001/v1/public/tutorials`, headers);
};
