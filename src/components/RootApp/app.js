import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class RootApp extends React.Component {
  state = {
    a: 2,
  };

  componentDidMount() {
    try {
      fetch('http://localhost:8000')
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          this.setState({ a: 3 });
        })
        .catch((err) => console.log(err));
    } catch (e) {
      console.log('err, ', e);
    }
  }

  render() {
    console.log('the state', this.state);
    return (
      <div>
        <h1 className="asdf">Welcome</h1>
        <p>
          <Link to="/todo/">TodoApp</Link>
        </p>
        <p>
          <Link to="/loginClass/">Login Class Component</Link>
        </p>
        <p>
          <Link to="/loginFunctional/">Login Functional Component</Link>
        </p>
        <p>
          <Link to="/app1/">App1</Link>
        </p>
        <p>
          <Link to="/app2/">App2</Link>
        </p>
      </div>
    );
  }
}

const wrappedApp = connect()(RootApp);

export default wrappedApp;
