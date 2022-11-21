import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import RootApp from './RootApp/app'
import App1 from './App1/app'
import App2 from './App2/app'
import Login from './Login/login'


class RouterApp extends React.Component {
    render() {
        return <Router>
            <div>
                <Route path="/" component={RootApp} />
                <Route path="/app1" component={App1} />
                <Route path="/app2" component={App2} />
                <Route path="/login" component={Login} />
            </div>
        </Router>
    }
}

const wrappedApp = connect()(RouterApp)

export default wrappedApp
