import React from "react"
import { Redirect, Switch, Route } from "react-router-dom";
import { Orders } from "./Orders";
import { Restaurants } from "./Restaurants";

export default function BasePage() {
  
    return (
        <Switch>
          {
            /* Redirect from root URL to /restaurants. */
            <Redirect exact from="/" to="/restaurants" />
          }
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/orders" component={Orders} />
        </Switch>
    );
  }
  