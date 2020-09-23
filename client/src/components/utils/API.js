import axios from "axios";

export default {
  // Gets all objects
  getObjects: function() {
    return axios.get("/api/objects");
  },
  // Gets the object with the given id
  getObject: function(id) {
    return axios.get("/api/objects/" + id);
  },
  // Deletes the object with the given id
  deleteObject: function(id) {
    return axios.delete("/api/objects/" + id);
  },
  // Saves a object to the database
  saveObject: function(objectData) {
    return axios.post("/api/objects", objectData);
  }
};
