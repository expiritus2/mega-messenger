import React, { useState } from 'react';
import { apiServer } from 'settings/api';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onClick = () => {
        apiServer.post('/api/auth/login', { username, password })
            .then((data) => console.log('data', data))
            .catch((err) => console.log('err', err));
    }

    return (
        <form>
            <input type="text" name="login" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="button" onClick={onClick}>Submit</button>
        </form>
    );
};

export default Login;
