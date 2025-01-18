import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignUpPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignUp() {
        console.log('Signed up with', { email, password });
        navigate('/');
    }

    return (
        <div className="login-page-wrapper">
            <div className="left-section">
                <img src="src/assets/images/logo/logo.png" alt="Green Shadow Logo" className="logo" />
                <h1 className="welcome-title">Create a New Account</h1>
                <p className="welcome-text">
                    Join Green Shadow and start managing your fields, crops, and resources efficiently.
                </p>

                <label htmlFor="email" className="input-label">Email address</label>
                <input
                    type="email"
                    id="email"
                    className="text-field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password" className="input-label">Password</label>
                <input
                    type="password"
                    id="password"
                    className="text-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <p>Already have an account?</p>
                <button className="reset-link" onClick={() => navigate('/')}>Log in</button>

                <button type="button" className="login-button" onClick={handleSignUp}>Sign up</button>
            </div>

            <div className="right-section">
                <img src="src/assets/images/login-side-image.png" alt="Farming illustration" className="side-image" />
            </div>
        </div>
    );
}