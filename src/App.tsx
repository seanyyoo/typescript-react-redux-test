import CustomerList from "./views/UserList";
import PostList from "./views/PostList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/user" component={CustomerList} />
        <Route path="/post" component={PostList} />
        <Redirect from="*" to="/user" />
      </Switch>
    </Router>
  );
};

export default App;
