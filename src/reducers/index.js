import { combineReducers } from "redux";
import channels from "./ChannelReducer";
import events from "./eventsReducer";

const reducer = combineReducers({
  channels,
  events
})

export default reducer;
