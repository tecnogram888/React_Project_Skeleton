import React from 'react'
import { BrowserRouter as Router, Root, Route } from 'react-router-dom'
import { connect } from 'react-redux'

class App extends React.Component {
    render() {
        return <Router>
            <div>
                <Route path="/" render={() => (
                    <h1>Welcome</h1>
                    )} />
                <Route path="/" render={() => (
                    <h1>{this.props.text}</h1>
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
