import axios from "axios";
export function getChannels(direction) {
  console.log("hfweoi")
  return function(dispatch) {
    // axios.get("localhost:8080")
    axios.get("http://localhost:8080/channels",{
          params: {
            direction: direction
          }
    }

    )
    .then((response) => {
      dispatch({type: "CHANNELS_FETCHED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "EVENTS_REJECTED", payload: err})
    })
  }
}
