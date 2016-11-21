export default function reducer(state = {
  channels: [],
  fetched: false
}, action) {
    //////////////////////////////////////////
    // INITIAL FETCH OF DATA
    //////////////////////////////////////////
    if (action.type === "DATA_FETCHED") {
      console.log("kommer in här");
     return {
      ...state,
      channels: action.payload.channels,
      fetched: true
     }
    }
    return state;
}
