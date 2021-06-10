import React from 'react';

import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './Home';
import Notfound from './notfound';

export default function index() {
    return (
        <>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/notfound">
                    <Notfound/>
                </Route>
                <Redirect to="notfound"/>

            </Switch>

        </>
    );
}

