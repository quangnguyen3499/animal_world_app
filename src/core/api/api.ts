import axios from 'axios';
const API_URL = 'http://192.168.1.20:3000/api/v1';

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

  // async logout(token: string) {

  // }
}

export {UserService};
