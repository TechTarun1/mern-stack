import { useState } from 'react';

import './Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const naviagte = useNavigate();

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const onLogin = (e: any) => {
        e.preventDefault();
        axios.post('http://localhost:4000/user/login', { email: email, password: password }, config).then((response: any) => {
            console.log(response)
            if (response.data.user) {
                localStorage.setItem('token',response.data.user)
                naviagte('/tasks')
            } else {
                alert('Please check username and password.')
            }
        })
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={onLogin}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e: any) => setEmail(e.target.value)}
                        placeholder='Enter your email'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                        placeholder='Enter your name'
                    />
                </div>
                <p>Do you have account?<span style={{color:'blue',cursor:'pointer',marginLeft:5}} onClick={() => naviagte('/registration')}>Register</span></p>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login
