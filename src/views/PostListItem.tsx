import React from "react";
import { postListItemProps } from "../types/postTypes";

const PostListItem: React.FC<postListItemProps> = ({ post }) => {
  return (
    <tr className={post.id % 2 === 0 ? "bg-white" : "bg-gray-50"}>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <span>{post.title}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <span>{post.body}</span>
      </td>
    </tr>
  );
};

export default PostListItem;
