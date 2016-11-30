export default function events(state = {
    events: [],
    fetched: false
}, action) {
    //////////////////////////////////////////
    // INITIAL FETCH OF DATA
    //////////////////////////////////////////
    if (action.type === "CHANNELS_EVENTS_FETCHED") {
        return {
            ...state,
            events: action.payload.events,
            fetched: true
        }
    }
    return state;
}
