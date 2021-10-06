import post from "./post";
import * as actions from "../actions/types";
import { mockPosts } from "../mockData";

describe("post reducer", () => {
  it("should return the initail state", () => {
    expect(post(undefined, {})).toEqual({
      posts: [],
      columns: [
        { id: "title", label: "Title" },
        { id: "body", label: "Body" },
      ],
    });
  });

  it("should handle GET_POSTS", () => {
    const getPost = {
      type: actions.GET_POSTS,
      payload: mockPosts,
    };
    expect(post(undefined, getPost).posts).toEqual(mockPosts);
  });
});
