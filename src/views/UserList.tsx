import React from "react";
import { connect } from "react-redux";
import { getUsers, searchUsers } from "../actions/user";
import UserListItem from "./UserListItem";
import { useEffect } from "react";
import SearchList from "./SearchList";
import { userListProps, user, column } from "../types/userTypes";

const UserList: React.FC<userListProps> = ({
  users,
  columns,
  getUsers,
  searchUsers,
}) => {
  useEffect(() => {
    getUsers();
  }, []);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    searchUsers(value);
  };

  return (
    <>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Customers</h1>
        </div>
        <div className="max-w-8xl mx-auto my-4">
          <hr />
        </div>
      </div>
      <SearchList onChange={handleTextChange} />
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        {columns.map((column: column) => (
                          <th
                            key={column.id}
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            {column.label}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {users &&
                        users.map((user: user) => (
                          <UserListItem key={user.id} user={user} />
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  users: state.user.users,
  columns: state.user.columns,
});

export default connect(mapStateToProps, { getUsers, searchUsers })(UserList);
