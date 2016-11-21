export default function reducer(state = {
  channels: [],
  fetched: false
}, action) {
    //////////////////////////////////////////
    // INITIAL FETCH OF DATA
    //////////////////////////////////////////
    if (action.type === "DATA_FETCHED") {
     return {
      ...state,
      channels: action.payload,
      fetched: true
     }
    }
    return state;
}
