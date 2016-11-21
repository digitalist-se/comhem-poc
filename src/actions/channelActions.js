import axios from "axios";

export function getChannels() {
  return function(dispatch) {
    axios.get(
      "https://api-staging.tv.comhem.se/", {
        params: {
          "api-key": "FF8gVWr27G"
        }
      }
    )
    .then((response) => {
      console.log("Det funkar!");
      dispatch({type: "DATA_FETCHED", payload: response.data})
    })
    .catch((err) => {
      console.log("Det blev en error");
      dispatch({type: "DATA_REJECTED", payload: err})
    })
  }

}
