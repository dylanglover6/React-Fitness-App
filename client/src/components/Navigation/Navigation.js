import React from 'react';
import { Link } from 'react-router-dom';
import AuthUserContext from '../User/AuthUserContext';
import * as routes from '../../constants/routes';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  <ul>
    <li><Link to={routes.HOME}>Home</Link></li>
    {/* <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><SignOutButton /></li> */}
  </ul>

const NavigationNonAuth = () =>
  <ul>
    {/* <li><Link to={routes.LANDING}>Landing</Link></li> */}
    {/* <li><Link to={routes.SIGN_IN}>Sign In</Link></li> */}
  </ul>

export default Navigation;

import React from 'react';

// CodeCademy nice easy, short way for a navbar.
// export class NavBar extends React.Component {
//   render() {
//     const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
//     const navLinks = pages.map(page => {
//       return (
//         <a href={'/' + page}>
//           {page}
//         </a>
//       )
//     });

//     return <nav>{navLinks}</nav>;
//   }
// }