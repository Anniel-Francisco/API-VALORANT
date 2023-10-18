import axios from "axios";

export default {
  getAgents() {
    return axios
      .get("https://valorant-api.com/v1/agents")
      .then(({ data }) => data);
  },

  getGameModes() {
    return axios
      .get("https://valorant-api.com/v1/gamemodes")
      .then(({ data }) => data);
  },
  getWeapons() {
    return axios
      .get("https://valorant-api.com/v1/weapons")
      .then(({ data }) => data);
  },
  getMaps() {
    return axios
      .get("https://valorant-api.com/v1/maps")
      .then(({ data }) => data);
  },
};
