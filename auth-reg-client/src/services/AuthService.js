import axios from "axios";

export function registerUser(data) {
  return axios
    .post(process.env.REACT_APP_BACKEND + "/register/", {
      username: data.username,
      password: data.password,
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
    })
    .then((response) => response.data);
}

export function loginUser(data) {
  return axios
    .post(process.env.REACT_APP_BACKEND + "/login/", {
      username: data.username,
      password: data.password,
    })
    .then((response) => response.data);
}