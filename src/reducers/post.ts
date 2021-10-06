import { GET_POSTS } from "../actions/types";

const initialStates: any = {
  posts: [],
  columns: [
    { id: "title", label: "Title" },
    { id: "body", label: "Body" },
  ],
};

const post = (state = initialStates, action: any) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export default post;
