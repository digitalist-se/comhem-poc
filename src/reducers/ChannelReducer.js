export default function channels(state = {
  channels: [],
  fetched: false
}, action) {
    //////////////////////////////////////////
    // INITIAL FETCH OF DATA
    //////////////////////////////////////////
    if (action.type === "CHANNELS_FETCHED") {
      return {
        ...state,
        channels: action.payload.channels,
        fetched: true
      }
    }
    else if(action.type === "CHANNELS_EVENTS_FETCHED") {
      var newState = Object.assign({},state);
      newState.channels[action.payload.index] = action.payload.response.channels[0]
      return newState;
    }



    return state;
}
