import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import '.././style/style.css'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
            alert('Невірний пароль');

        }
    };

    return (
        <div className="forma">
            <form role="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <hr />
                <div className="form-group">
                    <label htmlFor="password">Пароль</label>
                    <input type="password" className="form-control" id="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button  type="submit" className="btn btn-success mt-2" style={{ margin: '0 auto', display: 'block' }}>
                    <Link to="/about" className="nav-link">Увійти</Link></button>
            </form>
        </div>
    );
};

export default LoginForm;
