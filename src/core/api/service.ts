import axios from 'axios';
import storage from '@react-native-firebase/storage';
const API_URL = 'http://192.168.1.169:3000/api/v1';

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

class PlaceService {
  static getPlaces() {
    const url = `${API_URL}/places`;
    return axios
      .get(url).then(res => res.data.data)
  }

  static getPlaceDetail(place_id: any) {
    const url = `${API_URL}/places/${place_id}`;
    return axios
      .get(url).then(res => res.data.data)
  }
}

class MapService {
  static getMarkers(place_id: any, floor_id: any) {
    const url = `${API_URL}/coordinates`;
    return axios
      .get(url, {
        params: {
          place_id: place_id,
          floor_id: floor_id,
        }
      }).then(res => res.data)
  }

  static getShortestPath(place_id: any, floor_id: any, source: any, target: any) {
    const url = `${API_URL}/shortest_path`;
    return axios
      .get(url, {
        params: {
          place_id: place_id,
          floor_id: floor_id,
          source: source,
          target: target,
        }
      }).then(res => res.data);
  }
}

class FireBaseService {
  static async getFolderStorage(url: string) {
    const folderRef = await storage().ref(url).listAll();
    return await Promise.all(folderRef.items.map((ref) => ref.getDownloadURL()));
  }
  static getFileStorage(url: string) {
    return storage().ref(url).getDownloadURL();
  }
  static removeFileStorage(url: string) {
    return storage().ref(url).delete();
  }
  static putFileStorage(url: string, new_path: string) {
    return storage().ref(url).putFile(new_path);
  }
}

export {
  UserService, 
  PlaceService, 
  MapService,
  FireBaseService,
};
