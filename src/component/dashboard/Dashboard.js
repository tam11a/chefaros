import React, { useState } from 'react'
import Footer from '../footer/Footer'
import Search from '../search/Search'
import {
    Switch,
    Route
  } from "react-router-dom";


export default function Dashboard() {
    const [search, setSearch] = useState('')
    return (
        <div className="flex-col container">
            <Switch>
                <Route path="/search" exact>
                    <Search search={search}/>
                </Route>
                <Route path="*">
                    <h1>404</h1>
                </Route>
            </Switch>
            <Footer setSearch={setSearch}/>
        </div>
    )
}
