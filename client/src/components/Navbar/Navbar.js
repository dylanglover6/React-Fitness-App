import React from "react";
import { Link, withRouter, } from 'react-router-dom';
import * as routes from '../../constants/routes';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <Link to={routes.HOME} className="navbar-brand" >
      React Fitness App
    </Link>
  </nav>
);

export default Navbar;
