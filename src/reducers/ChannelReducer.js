
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


      if(action.payload.direction === "right" ) {
        newState.channels[action.payload.index].events = action.payload.response.channels[0].events

      } else if(action.payload.direction === "left") {
        newState.channels[action.payload.index].events = action.payload.response.channels[0].events
        var hej = action.payload.response.channels[0].events.shift();

        // var hej = newState.channels[action.payload.index].events.shift();
         newState.channels[action.payload.index].events.unshift(hej)
      }






      return newState;
    }



    return state;
}
