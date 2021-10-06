export interface user {
  id: number;
  name: string;
  username: string;
  email: string;
  address: address;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface userListItemProps {
  user: user;
}

export interface column {
  id: string;
  label: string;
}

export interface userListProps {
  getUsers: () => void;
  searchUsers: (input: string) => void;
  users: Array<user>;
  columns: Array<column>;
}
