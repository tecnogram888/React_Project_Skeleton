import React from 'react';

import style from './loginComponent.css';

class LoginClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    let { username, password } = this.state;

    return (
      <div className={style.loginDiv}>
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onInput={this.handleUsernameChange}
        />
        <br />
        <br />
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onInput={this.handlePasswordChange}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

export default LoginClassComponent;
