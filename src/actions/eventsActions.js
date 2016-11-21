import axios from "axios";

export function getEvents() {
  return function(dispatch) {
    axios.get("../api/events.json")
    .then((response) => {
      dispatch({type: "EVENTS_FETCHED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "EVENTS_REJECTED", payload: err})
    })
  }
}
