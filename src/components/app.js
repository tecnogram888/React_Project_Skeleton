import React from 'react'
import { BrowserRouter as Router, Root, Route } from 'react-router-dom'

class App extends React.Component {
    render() {
        return <Router>
            <div>
                <Route path="/" render={() => (
                    <h1>Welcome</h1>
                    )} />
            </div>
        </Router>
    }
}

export default App
