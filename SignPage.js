import React, { useState } from 'react';
import axios from 'axios';
import '../style/style.css';

const SignPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== repeatPassword) {
            alert('Паролі не співпадають');
            return;
        }

        try {
            const response = await axios.post('/api/register', { name, email, password });
            console.log(response.data);
            alert('Ви успішно зареєструвалися!');
        } catch (error) {
            console.error(error.response.data);
            alert('Ви успішно зареєструвалися!');
        }
    };

    return (
        <>
            <div className="forma">
                <form role="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Ім'я</label>
                        <input type="text" className="form-control" id="name" placeholder="Ім'я" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="password">Пароль</label>
                        <input type="password" className="form-control" id="pass" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="pass_repeat">Повторіть пароль</label>
                        <input type="password" className="form-control" id="pass_repeat" placeholder="Повторіть пароль" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
                    </div>
                    <hr />
                    <button type="submit" className="btn btn-success" style={{ margin: '0 auto', display: 'block' }}>Зареєструватися</button>
                </form>
            </div>
        </>
    );
};

export default SignPage;
