import axios from "axios";
// Get all the channels with the current program.
export function getChannels(direction) {
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
// Get programs of a channel depending on the direction.
export function getChannelEvents(direction, channel) {
  return function(dispatch) {
    // axios.get("localhost:8080")
    axios.get("http://localhost:8080/channel-event/",{
          params: {
            direction: direction,
            channelID : channel
          }
        }

        )
        .then((response) => {
          dispatch({type: "CHANNELS_EVENTS_FETCHED", payload: response.data})
        })
        .catch((err) => {
          dispatch({type: "CHANNELS_EVENTS_REJECTED", payload: err})
        })
  }
}
