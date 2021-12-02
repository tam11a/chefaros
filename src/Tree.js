import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Splash from './component/splash/Splash'

export default function Tree() {
    return (
        <Router>
          <Splash />
        </Router>
    )
}
