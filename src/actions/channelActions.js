import axios from "axios";
export function getChannels() {
  return function(dispatch) {
    // axios.get("localhost:8080")
    axios.get("http://localhost:8080/channels")
    .then((response) => {
      dispatch({type: "CHANNELS_FETCHED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "EVENTS_REJECTED", payload: err})
    })
  }
}
