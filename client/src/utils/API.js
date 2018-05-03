import axios from "axios";
import Auth from "./Auth";

//methods for interacting with API Auth routes
export default {
  login: userData => 
     axios.post("/auth/login",  userData),
  signUp: userData => 
  	 axios.post('/auth/signup', userData),
  dashboard: token =>
     axios.get('/api/dashboard', {headers: {Authorization: `bearer ${token}`}}),

      getTasks: function() {
        const token = Auth.getToken();
        return axios.get("/api/task", {headers: {Authorization: `bearer ${token}`}});
      },
      // Gets the task with the given id
      getTask: function(id) {
        console.log(id);
        const token = Auth.getToken();
        return axios.get("/api/task/" + id, {headers: {Authorization: `bearer ${token}`}});
      },
    
      updateTask: function(id) {
        console.log(id);
        const token = Auth.getToken();
        return axios.put("/api/task/" + id, {headers: {Authorization: `bearer ${token}`}});
      },
      // Deletes the task with the given id
      deleteTask: function(id) {
        console.log(id);
        const token = Auth.getToken();
        return axios.delete("/api/task/" + id, {headers: {Authorization: `bearer ${token}`}});
      },
      // Saves a task to the database
      saveTask: function(taskData) {
        console.log(taskData);
        const token = Auth.getToken();
        return axios.post("/api/task", taskData, {headers: {Authorization: `bearer ${token}`}});
      },
    
      saveUser: function(userData) {
        console.log(userData);
        return axios.post("/api/user", userData);
      },
      signup: function(user) {
        console.log('signup', user);
        return axios.post('/signup', user);
      }
    };
