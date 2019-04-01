import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import RootApp from './RootApp/app'
import App1 from './App1/app'
import App2 from './App2/app'


class RouterApp extends React.Component {
    render() {
        return <Router>
            <div>
                <RootApp />
                <Route path="/app1" component={App1} />
                <Route path="/app2" component={App2} />
            </div>
        </Router>
    }
}

const wrappedApp = connect()(RouterApp)

export default wrappedApp
