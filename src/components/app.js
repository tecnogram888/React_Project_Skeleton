import React from 'react'
import { BrowserRouter as Router, Root, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Editor from './Editor'

const test = {
    title: 'titles',
    children: [{
        title: 'sub child',
        children: []
    }, 'asdf', 'next']
}

class App extends React.Component {
    render() {
        return <Router>
            <div>
                <Route path="/" render={() => (
                    <h1>Welcome</h1>
                    )} />
                <Route path="/" render={() => (
                    <a>{this.props.text}</a>
                    )} />
                <Route path="/" render={() => (
                    <Editor value={test} />
                    )} />
            </div>
        </Router>
    }
}

const mapStateToProps = (state) => {
    return {
        text: state.text,
    }
}

const wrappedApp = connect(
    mapStateToProps
  )(App)
  

export default wrappedApp
