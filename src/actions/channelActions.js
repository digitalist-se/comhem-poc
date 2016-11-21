import axios from "axios";

export function getChannels() {
  console.log("Kallas på");
  return function(dispatch) {
    axios.get("../api/fake.json")
    .then((response) => {
      dispatch({type: "DATA_FETCHED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "DATA_REJECTED", payload: err})
    })
  }

}
