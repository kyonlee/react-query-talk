import axios from "axios";

const basePostURL = "https://jsonplaceholder.typicode.com/posts";
export const baseActionType = "FETCH_POST"

export const actionTypes = {
  FETCH_POST_REQUEST: `${baseActionType}_REQUEST`,
  FETCH_POST_SUCCESS: `${baseActionType}_SUCCESS`,
  FETCH_POST_FAILURE: `${baseActionType}_FAILURE`,
};

export function fetchPostRequest() {
  return {
    type: actionTypes.FETCH_POST_REQUEST,
  };
}

export function fetchPostSuccess(post) {
  return {
    type: actionTypes.FETCH_POST_SUCCESS,
    payload: post,
  };
}

export function fetchPostFailure(errMsg) {
  return {
    type: actionTypes.FETCH_POST_FAILURE,
    payload: errMsg,
  };
}

export const fetchPost = (postId) => {
  return async (dispatch) => {
    dispatch(fetchPostRequest());
    try {
      const response = await axios.get(`${basePostURL}/${postId}`)
      dispatch(fetchPostSuccess(response.data));
    } catch (err) {
      dispatch(
        fetchPostFailure(
          "Something went wrong. Please try again later."
        )
      );
    }
  };
};
