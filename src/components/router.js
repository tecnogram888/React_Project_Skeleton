import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createBrowserHistory } from 'history';
import RootApp from './RootApp/app'
import App1 from './App1/app'
import App2 from './App2/app'
import Login from './Login/login'

const customHistory = createBrowserHistory();

class RouterApp extends React.Component {
    render() {
        return <Router history={customHistory}>
            <div>
                <Route exact path="/" component={RootApp} />
                <Route path="/app1" component={App1} />
                <Route path="/app2" component={App2} />
                <Route path="/login" component={Login} />
            </div>
        </Router>
    }
}

const wrappedApp = connect()(RouterApp)

export default wrappedApp
