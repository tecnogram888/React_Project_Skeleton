import React, {useState} from 'react'

const LoginFunctionalComponent = (props) => {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return <div>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" value={username} onInput={handleUsernameChange} /><br /><br />
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onInput={handlePasswordChange} /><br /><br />
            <input type="submit" value="Submit" />
        </div>
}

export default LoginFunctionalComponent
