import axios from 'axios';
const API_URL = process.env.API_URL;

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

export {MapService};
