import axios from 'axios';
const API_URL = process.env.API_URL;

class UserService {
  static login(email: string, password: string) {
    const url = `${API_URL}/users/sign_in`;
    return axios
      .post(url, {
        email: email,
        password: password,
      })
      .then(res => res.data);
  }

  static logout(token: string) {
    const url = `${API_URL}/users/sign_out`;
    return axios
      .delete(url, {
        params: {
          uid: token
        }
      })
  }

  static update(user_id: string, username: string) {
    const url = `${API_URL}/users/${user_id}`;
    return axios
      .put(url, {
        username: username
      })
      .then(res => res.data.data)
  }

  static create(email: string, password: string, username: string) {
    const url = `${API_URL}/users`;
    return axios
      .post(url, {
        email: email,
        password: password,
        username: username,
      })
      .then(res => res.data)
  }
}

export {UserService};
