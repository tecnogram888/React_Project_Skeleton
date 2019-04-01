import React from 'react'
import { BrowserRouter as Router, Root, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Editor from '../Editor'

const test = {
    title: 'titles',
    children: [{
        title: 'sub child',
        children: []
    }, 'asdf', 'next']
}

import css from './../../css/style.css'

class App extends React.Component {
    render() {
        return <Router>
            <div>
                <h1 className="asdf">App2</h1>
                <a>{this.props.text}</a>
                <Editor value={test} />
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
