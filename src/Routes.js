import React from "react"
import { Redirect, Switch, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage"
import BasePage from "./pages/BasePage"


export function Routes() {
    const isAuthorized  = localStorage.getItem("authToken") ? true : false;
    console.log(localStorage.getItem("authToken"))
    return (
      <Switch>
        {!isAuthorized ? (
          /*Render auth page when user at `/auth` and not authorized.*/
          <Route>
            <AuthPage />
          </Route>
        ) : (
          /*Otherwise redirect to root page (`/`)*/
          <Redirect from="/auth" to="/" />
        )}
  
        {!isAuthorized ? (
          /*Redirect to `/auth` when user is not authorized*/
          <Redirect to="/auth" />
        ) : (
            <BasePage />
        )}
      </Switch>
    );
  }