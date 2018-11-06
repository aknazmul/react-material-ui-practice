import React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
// Component
// import Header from './component/Header';
// import Sidebar from './component/Sidebar';
// Component view
// import App from './App';
// import Home from './view/Home';
// import Aboutus from './view/Aboutus';
// import Login from './view/Login';
// import Dashboardlayout from './Layout/Dashboardlayout';
// import Emptylayout from './Layout/Emptylayout';
import Routing from './routing/Routing'

import * as serviceWorker from './serviceWorker'; 

render(
    <Routing />, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


// <BrowserRouter>
//   <Switch>
//   <div className="App">
//     <Route exact path="/(login)" component={LoginContainer}/>
//     <Route component={DefaultContainer}/>

//   </div>
//   </Switch>
// </BrowserRouter>

// const LoginContainer = () => (
//   <div className="container">
//     <Route exact path="/" render={() => <Redirect to="/login" />} />
//     <Route path="/login" component={Login} />
//   </div>
// )


//  const DefaultContainer = () => (
//     <div>
//     <Header toggleAlert={this.toggleAlert} />
//     <div className="container">
//       <Navbar />
//       <Route path="/main" component={Main} />
//       <Route path="/user" component={User} />
//       <Route path="/hw-setting" component={Setting} />
//       <Route path="/hw-detail/:id" component={HwDetail} />
//       <Route path="/gas-detail/:id" component={GasDetail} />
//       {this.state.isAlertOpen ? <Alert /> : null}
//     </div>
//     </div>
//  )