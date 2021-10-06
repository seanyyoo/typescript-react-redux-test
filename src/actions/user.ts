import axios from "axios";
import { Dispatch } from "redux";
import { GET_USERS, SEARCH_USERS } from "./types";

// Get Users
export const getUsers = () => async (dispatch: Dispatch) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");

  dispatch({ type: GET_USERS, payload: res.data });
};

// Search Users
export const searchUsers = (input: string) => async (dispatch: Dispatch) => {
  dispatch({ type: SEARCH_USERS, payload: input });
};
