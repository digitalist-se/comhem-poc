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
    // axios.get(
    //
    //   baseURL: 'https://api-staging.tv.comhem.se/webapi/system',
    //   method: 'get', // default
    //   headers: {
    //       'webapi-version' : "99",
    //       'api-key': "HZvTr4YV8B"
    //   }
    // )
    // .then((response) => {
    //   console.log(response.data);
    //   console.log(response.status);
    //   console.log(response.headers);
    //
    //
    //   // dispatch({type: "CHANNELS_FETCHED", payload: response.data})
    // })
    // .catch((err) => {
    //   console.log("Det blev en error");
    //   dispatch({type: "CHANNELS_REJECTED", payload: err})
    //
    // })
  }
}
