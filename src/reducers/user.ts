import { GET_USERS, SEARCH_USERS } from "../actions/types";

const initialStates: any = {
  users: [],
  allUsers: [],
  columns: [
    { id: "name", label: "Name" },
    { id: "email", label: "Email" },
    { id: "city", label: "City" },
    { id: "company", label: "Company" },
  ],
};

const user = (state = initialStates, action: any) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload, allUsers: action.payload };
    case SEARCH_USERS:
      return {
        ...state,
        users: state.allUsers.filter((user: any) =>
          user.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    default:
      return state;
  }
};

export default user;
