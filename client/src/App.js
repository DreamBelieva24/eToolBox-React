import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import HomePage from './components/HomePage.jsx';
import { 
  PrivateRoute, 
  PropsRoute, 
  LoggedOutRoute 
} from './components/Routes';

import LoginPage from './pages/LoginPage.jsx';
import LogoutFunction from './pages/LogoutFunction.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import eToolBox from './pages/eToolBox';
import Schedule from './pages/Schedule';


import Auth from './utils/Auth';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

class App extends Component {

  state = {
    authenticated: false
  }

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus()
  }

  toggleAuthenticateStatus = () => {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router>
          <div>
          <div className="row align-center animated bounceInDown" id="nav">
          <div className="one fifth gapped" >
          <Link to="/"> eToolBox </Link>
          </div>
              <div className="one fifth skip-two" id="right-top">
              {this.state.authenticated ? (
                <div >
                  <Link to="/logout">Log out</Link>
                </div>
              ) : (
                <div >
                  <Link to="/login">Log in</Link> &nbsp; / &nbsp; 
                  <Link to="/signup">Sign up</Link>
                </div>
              )}
                </div>
            </div>
              
            <Route exact path="/" component={eToolBox} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
            <PrivateRoute path="/dashboard" component={eToolBox}/>
            <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
            <LoggedOutRoute path="/signup" component={SignUpPage}/>
            <Route path="/logout" component={LogoutFunction}/>
            <Route exact path="/schedule" component={Schedule} toggleAuthenticateStatus={this.toggleAuthenticateStatus}/>
          </div>

        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App;
