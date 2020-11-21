import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './views/Home';
import Addword from './views/Addword';
import Register from './views/Register';
import Login from './views/Login';

const StyleWrapper = styled.div`

`

const App = () => {

  return (
    <StyleWrapper>

      <ul>
        <div>
          <Link to="/">Home Page</Link>
        </div>
        <div>
          <Link to="/add-word">Add-Word Page</Link>
        </div>
        <div>
          <Link to="/register">Register Page</Link>
        </div>
        <div>
          <Link to="/login">Login Page</Link>
        </div>
      </ul>


      <Switch>
        <Route path="/add-word">
          <Addword />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </StyleWrapper>
  );
}

export default App;
