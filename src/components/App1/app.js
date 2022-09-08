import React from 'react'
import { BrowserRouter as Router, Root, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Editor from './../Editor'

const test = {
    title: 'titles',
    children: [{
        title: 'sub child',
        children: [{
            children: [{
                title: 'sub sub child',
                children: []
            }, 'asdf', 'next']
        }],
    }, 'asdf', 'next']
}

class App extends React.Component {
    render() {
        return <div>
            <h1>App1</h1>
            <a>{this.props.text}</a>
            <Editor value={test} />
            <Test children={<div>props</div>}></Test>
        </div>
    }
}

class Test extends React.Component {
    render() {
        return <div>{this.props.children}</div>
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
