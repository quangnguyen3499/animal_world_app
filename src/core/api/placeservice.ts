import axios from 'axios';
const API_URL = process.env.API_URL;

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

export {PlaceService};
