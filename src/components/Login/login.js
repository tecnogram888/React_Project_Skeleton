import React from 'react'

class Login extends React.Component {
    render() {
        return <div>
            <label for="username">Username:</label>
            <input type="text" id="username" name="fname" /><br /><br />
            <label for="password">Password:</label>
            <input type="text" id="lname" name="lname" /><br /><br />
            <input type="submit" value="Submit" />
        </div>
    }
}

export default Login
