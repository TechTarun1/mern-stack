import React, { useState } from 'react'
import axios from 'axios'

import './Registration.css'

const Registration = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onRegister = (e: any) => {
        e.preventDefault();
        axios.post('http://localhost:4000/user/register', { name: name, email: email, password: password }).then((response: any) => {

            if (response.data.status == 'Ok') {
                alert('Registration successful')
            } else {
                alert(JSON.stringify(response))
            }
        })
    };

    return (
        <div className="login-form">
            <h2>Registration</h2>
            <form onSubmit={onRegister}>
                <div className="form-group">
                    <label htmlFor="email">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e: any) => setName(e.target.value)}
                        placeholder='Enter your name'
                    />
                </div>
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
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Registration
