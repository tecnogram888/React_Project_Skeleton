import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import css from './../../css/style.css'

class RootApp extends React.Component {
    render() {
        return <div>
            <h1 className="asdf">Welcome</h1>
            <p><Link to="/login/">Login</Link></p>
            <p><Link to="/app1/">App1</Link></p>
            <p><Link to="/app2/">App2</Link></p>
        </div>
    }
}

const wrappedApp = connect()(RootApp)

export default wrappedApp
