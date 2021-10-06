import axios from "axios";
import { Dispatch } from "redux";
import { GET_POSTS } from "./types";

// Get Posts
export const getPosts = (userId: number) => async (dispatch: Dispatch) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  dispatch({ type: GET_POSTS, payload: res.data });
};
