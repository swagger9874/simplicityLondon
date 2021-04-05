import React from "react"
import { Redirect, Switch, Route } from "react-router-dom";
import { Orders } from "./Orders";
import { Restaurants } from "./Restaurants";
import { UserPage } from "./UserPage";

export default function BasePage() {
  
    return (
        <Switch>
          {
            /* Redirect from root URL to /restaurants. */
            <Redirect exact from="/" to="/restaurants" />
          }
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/pastOrders" component={Orders} />
          <Route path="/userPage" component={UserPage} />
        </Switch>
    );
  }
  