import React from "react";
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import AuthUserContext from '../User/AuthUserContext';
import './Navbar.css';

class Greeting extends React.Component {
  render() {
    if (this.props.authUser === false) {
      return <p>You're not signed in</p>
    } else {
      return <p>Hello {this.props.name}!</p>
    }
  }
}

const Navbar = () =>
  <AuthUserContext.Consumer>
    {authUser => 
      authUser ? <NavigationAuth /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <Link to={routes.HOME} className="navbar-brand" >
      React Fitness App
    </Link>

    <p></p>
    
  </nav>
);


const NavigationNonAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <Link to={routes.LANDING} className="navbar-brand" >
      React Fitness App
    </Link>
  </nav>
);

export default Navbar;
