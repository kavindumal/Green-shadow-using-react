import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../store/user_provider';

export function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const userContext = useContext(UserContext);

    if (!userContext) {
        throw new Error('UserContext must be used within a UserProvider');
    }

    const [users] = userContext;

    function handleLogin() {
        const user = users.find(user => user.email === username && user.password === password);
        if (user) {
            alert('Successfully logged in');
            console.log('Logged in with', { username, password });
            navigate('/dashboard');
        } else {
            alert('Invalid username or password');
        }
    }

    return (
        <div className="login-page-wrapper">
            <div className="left-section">
                <img src="src/assets/images/logo/logo.png" alt="Green Shadow Logo" className="logo" />
                <h1 className="welcome-title">Welcome to Green Shadow</h1>
                <p className="welcome-text">
                    Efficiently manage your fields, crops, and resources with ease. Log in to access your dashboard.
                </p>

                <label htmlFor="username" className="input-label">Username</label>
                <input
                    type="text"
                    id="username"
                    className="text-field"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="password" className="input-label">Password</label>
                <input
                    type="password"
                    id="loginPassword"
                    className="text-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <p>Don't have an account?</p>
                <button className="reset-link" onClick={() => navigate('/register')}>Create a new account</button>

                <button type="button" className="login-button" onClick={handleLogin}>Sign in</button>
            </div>

            <div className="right-section">
                <img src="src/assets/images/login-side-image.png" alt="Farming illustration" className="side-image" />
            </div>
        </div>
    );
}