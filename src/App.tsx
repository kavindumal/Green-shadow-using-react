import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { LoginPage } from './pages/login_page';
import { SignUpPage } from './pages/signup_page';
import { RootLayout } from './components/RootLayout';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<LoginPage />} />
                    <Route path="/register" element={<SignUpPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;