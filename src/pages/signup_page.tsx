import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../store/user_provider';
import { User, Role } from '../models/user_model';

export function SignUpPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userContext = useContext(UserContext);

    if (!userContext) {
        throw new Error('UserContext must be used within a UserProvider');
    }

    const [users, setUsers] = userContext;

    function handleSignUp() {
        const newUser: User = { email, password, role: Role.OTHER };
        setUsers([...users, newUser]);
        console.log('Signed up with', { email, password });
        navigate('/login');
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
                <button className="reset-link" onClick={() => navigate('/login')}>Log in</button>

                <button type="button" className="login-button" onClick={handleSignUp}>Sign up</button>
            </div>

            <div className="right-section">
                <img src="src/assets/images/login-side-image.png" alt="Farming illustration" className="side-image" />
            </div>
        </div>
    );
}