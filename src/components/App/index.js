import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import Platform from "../Platform";
import Pdetail from "../Pdetail";
import withAuthentication from "../Session/withAuthentication";
import * as routes from "../../constants/routes";

import "./index.css";

const App = () => (
  <Router>
    <div className="app">
      <div className="container">
        <div className="row row-offcanvas row-offcanvas-right">
          <div className="col-xs-12 col-sm-9">
            <p className="pull-right visible-xs" />
            <Navigation />
            <Route
              exact
              path={routes.LANDING}
              component={() => <LandingPage />}
            />
            <Route
              exact
              path={routes.SIGN_UP}
              component={() => <SignUpPage />}
            />
            <Route
              exact
              path={routes.SIGN_IN}
              component={() => <SignInPage />}
            />
            <Route
              exact
              path={routes.PASSWORD_FORGET}
              component={() => <PasswordForgetPage />}
            />
            <Route exact path={routes.HOME} component={() => <HomePage />} />
            <Route
              exact
              path={routes.ACCOUNT}
              component={() => <AccountPage />}
            />
            <Route exact path={routes.PLAT} component={() => <Platform />} />
            <Route
              path="/p/:id"
              render={({ match }) => <Platform id={match.params.id} />}
            />
            <Route path="/m/:handle" component={Pdetail} />
            <Route
              path="/entries/:jobId/:entryId"
              render={({ match }) => (
                <Platform
                  jobId={match.params.jobId}
                  entryId={match.params.entryId}
                />
              )}
            />
          </div>
          <div className="col-xs-12 col-sm-3 sidebar-offcanvas" id="sidebar">
            <div className="list-group">
              <a href="#" className="list-group-item">
                Social Links
              </a>
              <a href="#" className="list-group-item">
                Advertisement Links
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Router>
);

export default withAuthentication(App);
