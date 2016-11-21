import { combineReducers } from "redux";
import channels from "./ChannelReducer";

const reducer = combineReducers({
  channels
})

export default reducer;
