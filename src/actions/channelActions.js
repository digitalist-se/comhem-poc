import axios from "axios";

export function getChannels() {
  return function(dispatch) {
    axios.get("../api/channels.json")
    .then((response) => {
      dispatch({type: "CHANNELS_FETCHED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "CHANNELS_REJECTED", payload: err})
    })
  }
}
