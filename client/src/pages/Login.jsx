
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

//assets
import Fondo from '../assets/paisaje.jpg';

//contexts
import {useAuthContext} from '../contexts/AuthContext';

//Styles
const loginBox = {
    margin: "15% 50% 15% 20%",
    padding: "4%",
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
    backgroundColor: "white"
}

const containerStyle = {
    //backgroundColor: "darkblue",
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    padding: "1%"
}

function Login() {
    const {login} = useAuthContext();
    const [form, setForm] = useState({
        "username": "",
        "password": ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function OnSubmit(event) {
        event.preventDefault();

        try {
            const res = await fetch("http://localhost:9000/login", {
                method: "POST",
                body: JSON.stringify(form),
                headers: {
                    "content-type": "application/json"
                }
            });
            if (!res.ok) {
                throw new Error('Error en la solicitud');
            }
            else {
                const data = await res.json();
                // Guardar el token en el almacenamiento local
                localStorage.setItem('token', data.token);
                login();
                navigate("/home");
            }
        } catch (error) {
            setError('Credenciales incorrectas');
            console.error('Error:', error);
        }
    }

    return (
        <div style={containerStyle}>
            <form onSubmit={OnSubmit} style={loginBox}>
                <h1 style={{ marginBottom: "8%" }}>Log In</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        value={form.username}
                        onChange={(e) => updateForm({ username: e.target.value })}
                        required
                    />
                    <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        value={form.password}
                        onChange={(e) => updateForm({ password: e.target.value })}
                        required
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary">Log in</button>
            </form>
        </div>
    );
}

export default Login;
