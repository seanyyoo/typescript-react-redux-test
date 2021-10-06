import user from "./user";
import * as actions from "../actions/types";
import { mockUsers } from "../mockData";

describe("user reducer", () => {
  it("should return the initail state", () => {
    expect(user(undefined, {})).toEqual({
      users: [],
      allUsers: [],
      columns: [
        { id: "name", label: "Name" },
        { id: "email", label: "Email" },
        { id: "city", label: "City" },
        { id: "company", label: "Company" },
      ],
    });
  });

  it("should handle GET_USERS", () => {
    const getAction = {
      type: actions.GET_USERS,
      payload: mockUsers,
    };
    expect(user(undefined, getAction).allUsers).toEqual(mockUsers);
  });

  it("should handle SEARCH_USERS", () => {
    const searchAction = {
      type: actions.SEARCH_USERS,
      payload: "Leanne",
    };
    expect(user({ allUsers: mockUsers }, searchAction).users[0].name).toEqual(
      "Leanne Graham"
    );
  });
});
