import React from "react";
import { connect } from "react-redux";
import { getPosts } from "../actions/post";
import PostListItem from "./PostListItem";
import { useEffect } from "react";
import { post, postListProps, column } from "../types/postTypes";

const PostList: React.FC<postListProps> = ({
  getPosts,
  location,
  posts,
  columns,
}) => {
  const userId = location.state.userId;
  useEffect(() => {
    getPosts(userId);
  }, []);

  return (
    <>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Posts</h1>
        </div>
        <div className="max-w-8xl mx-auto my-4">
          <hr />
        </div>
      </div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Replace with your content */}
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
                      {posts &&
                        posts.map((post: post) => (
                          <PostListItem key={post.id} post={post} />
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
  posts: state.post.posts,
  columns: state.post.columns,
});

export default connect(mapStateToProps, { getPosts })(PostList);
