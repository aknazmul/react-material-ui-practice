import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Component
// import Header from './component/Header';
// import Sidebar from './component/Sidebar';
// Component view
// import App from './App';
import Home from '../view/Home';
import Aboutus from '../view/Aboutus';
import Login from '../view/Login';
import Dashboardlayout from '../Layout/Dashboardlayout';
import Emptylayout from '../Layout/Emptylayout'; 

class Routing extends React.Component { 
    render () { 
        // const { path } = this.props;

        let layout = '';
        if( false) {
            layout = <Emptylayout> 
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/about-us" component={Aboutus} />
                <Route path="/" to="/login" component={Login} exact navbarName="Redirect" />
            </Switch> 
        </Emptylayout>
        } else {
            layout = <Dashboardlayout> 
            <Switch>
                <Route path="/Login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/about-us" component={Aboutus} />
                <Route path="/" to="/login" component={Login} exact navbarName="Redirect" />
            </Switch> 
        </Dashboardlayout>
        }
        return (
            <Router>
                <div>
                    {layout}
                </div>
            </Router>
        );
    }
}

export default Routing;