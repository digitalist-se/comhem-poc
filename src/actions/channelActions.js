import axios from "axios";

export function getChannels() {
  return function(dispatch) {

    axios.get("../api/channels.json")
    .then((response) => {
      dispatch({type: "CHANNELS_FETCHED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "CHANNELS_REJECTED", payload: err})

    // axios.get(
    //   "https://api-staging.tv.comhem.se/", {
    //     params: {
    //       "api-key": "FF8gVWr27G"
    //     }
    //   }
    // )
    // .then((response) => {
    //   console.log("Det funkar!");
    //   dispatch({type: "CHANNELS_FETCHED", payload: response.data})
    // })
    // .catch((err) => {
    //   console.log("Det blev en error");
    //   dispatch({type: "CHANNELS_REJECTED", payload: err})

    })
  }
}
