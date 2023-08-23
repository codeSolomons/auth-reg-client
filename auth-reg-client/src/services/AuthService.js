import axios from "axios";

export function registerUser(data) {
    return axios
      .post("https://auth-reg-api.up.railway.app/register/", {
        username: data.username,
        password: data.password,
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name,
      })
      .then((response) => response.data);
  }