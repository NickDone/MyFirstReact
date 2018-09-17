import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';

import App from './App.js';
import resume from './views/aboutme/resume.js';
import Nav from './components/navcontrol/navcontrol';
import {NavConfig} from './fakedatas/homeconfig.js';
const Routes = () => {
    function HandleNavClick() {
        alert("hello");
    }
    return (
        <div>
            <Nav navconfig={NavConfig}/>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path='/App' component={App}/>
                    <Route path='/resume/:name' component={resume}/>
                </Switch>
            </HashRouter>
        </div>
    )
}

export default Routes;