import { combineReducers } from "redux";

import postReducer from "./postReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
  post: postReducer,
  loading: loadingReducer,
});
