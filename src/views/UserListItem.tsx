import React from "react";
import { useHistory } from "react-router-dom";
import { userListItemProps } from "../types/userTypes";

const UserListItem: React.FC<userListItemProps> = (props: any) => {
  const history = useHistory();
  const user = props.user;

  const handleUser = () => {
    history.push({
      pathname: `/post/${user.name}`,
      state: { userId: user.id },
    });
  };

  function classNames(...classes: Array<string>) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <tr
      className={classNames(
        user.id % 2 === 0 ? "bg-white" : "bg-gray-50",
        "cursor-pointer"
      )}
    >
      <td
        className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
        id={user.id}
        onClick={handleUser}
      >
        <span id={user.id}>{user.name}</span>
      </td>
      <td
        className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
        id={user.id}
        onClick={handleUser}
      >
        <span id={user.id}>{user.email}</span>
      </td>
      <td
        className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
        id={user.id}
        onClick={handleUser}
      >
        <span id={user.id}>{user.address.city}</span>
      </td>
      <td
        className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
        id={user.id}
        onClick={handleUser}
      >
        <span id={user.id}>{user.company.name}</span>
      </td>
    </tr>
  );
};

export default UserListItem;
