import React from "react";
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { Navbar, Nav, Button } from 'react-bootstrap';
import NavWrap from './NavWrap';
import './Navigation.css';
import { auth } from '../../firebase';
import SignOutButton from '../User/SignOut';


class Navigation extends React.Component {

  render (){
    return(
      <Navbar inverse collapseOnSelect className="navbarStyles">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={routes.HOME}>
              <span className="ebc">E</span>very<span className="ebc">B</span>ody<span className="ebc">F</span>its
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavWrap>
              <ul className="ulStyles">
                <Link className="linkStyles" to={routes.VIEW_WORKOUTS}>Workouts</Link>
                <Link className="linkStyles" to={routes.FAVORITE_WORKOUTS}>Favorites</Link>
                <Link className="linkStyles" to={routes.USER_PROFILE}>Profile</Link>
                <Button className="navButton" onClick={auth.doSignOut} bsStyle="link"><span className="signOutText">Sign Out</span></Button>
              </ul>
            </NavWrap>
 
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;

// const Navbar = () =>
//   <AuthUserContext.Consumer>
//     {authUser => 
//       authUser ? <NavigationAuth /> : <NavigationNonAuth />
//     }
//   </AuthUserContext.Consumer>

// const NavigationAuth = () => (
//   <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//     <Link to={routes.HOME} className="navbar-brand" >
//       React Fitness App
//     </Link>
//     <SignOutButton />

//     <p></p>
    
//   </nav>
// );

// const NavigationNonAuth = () => (
//   <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//     <Link to={routes.LANDING} className="navbar-brand" >
//       Every Body Fits
//     </Link>
//   </nav>
// );