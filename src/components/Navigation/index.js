import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOut";
import * as routes from "../../constants/routes";

const Navigation = (props, { authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

Navigation.contextTypes = {
  authUser: PropTypes.object
};

const NavigationAuth = () => (
  <nav className="navbar navbar-fixed-top navbar-inverse">
    <div className="container">
      <Link className="navbar-brand" to={routes.LANDING}>
        M
      </Link>
      <Link className="navbar-brand" to={routes.PLAT}>
        Cars
      </Link>
      <Link className="navbar-brand" to={routes.PLAT}>
        Wheels
      </Link>
      <Link className="navbar-brand" to={routes.HOME}>
        Members
      </Link>
      <Link className="navbar-brand pull-right" to={routes.ACCOUNT}>
        Account
      </Link>
      <SignOutButton />
    </div>
  </nav>
);

const NavigationNonAuth0 = () => (
  <ul>
    <li>
      <Link to={routes.LANDING}>M</Link>
    </li>
    <li>
      <Link to={routes.PLAT}>Cars</Link>
    </li>
    <li>
      <Link to={routes.PLAT}>Wheels</Link>
    </li>
    <li>
      <Link to={routes.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <nav className="navbar navbar-fixed-top navbar-inverse">
    <div className="container">
      <Link className="navbar-brand" to={routes.LANDING}>
        M
      </Link>
      <Link className="navbar-brand" to={routes.PLAT}>
        Cars
      </Link>
      <Link className="navbar-brand" to={routes.PLAT}>
        Wheels
      </Link>
      <Link className="navbar-brand pull-right" to={routes.SIGN_IN}>
        <span class="glyphicon glyphicon-user" aria-hidden="true" />
      </Link>
    </div>
  </nav>
);

export default Navigation;
