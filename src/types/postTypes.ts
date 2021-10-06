export interface post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface postState {
  posts: Array<post>;
  columns: Array<column>;
}

export interface column {
  id: string;
  label: string;
}

export interface postListItemProps {
  post: post;
}

export interface postListProps {
  getPosts: (userId: number) => void;
  location: {
    hash: string;
    key: string;
    pathname: string;
    search: string;
    state: {
      userId: number;
    };
  };
  posts: Array<post>;
  columns: [{ id: "title"; label: "Title" }, { id: "body"; label: "Body" }];
}
