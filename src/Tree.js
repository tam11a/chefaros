import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Dashboard from './component/dashboard/Dashboard';
import Recipe from './component/recipe/Recipe';
import Splash from './component/splash/Splash'

export default function Tree() {
    return (
        <Router>
          <Switch>
            <Route path="/" exact>
              <Splash />
            </Route>
            <Route path="/recipe/:recipe_id">
              <Recipe />
            </Route>
            <Route path="*">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
    )
}
