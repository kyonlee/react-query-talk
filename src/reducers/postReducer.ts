import { actionTypes } from "@/actions/post";
import { baseActionType } from "@/actions/post";
import {
  createLoadingSelector,
  createSuccessSelector,
  createFailureSelector,
} from "./loadingReducer";

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POST_SUCCESS:
      return action.payload;
    case actionTypes.FETCH_POST_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

export const postSelector = (state) => state.post;

export const postLoadingSelector = createLoadingSelector([baseActionType]);
export const postSuccessSelector = createSuccessSelector([baseActionType]);
export const postFailureSelector = createFailureSelector([baseActionType]);
