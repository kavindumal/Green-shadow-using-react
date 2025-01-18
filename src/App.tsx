import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/login_page';
import { SignUpPage } from './pages/signup_page';
import { UserProvider } from './store/user_provider';
import { RootLayout } from './components/RootLayout';

function App() {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<RootLayout />}>
                        <Route path="login" element={<LoginPage />} />
                        <Route path="register" element={<SignUpPage />} />
                        {/*<Route path="dashboard" element={<Dashboard />} />*/}
                    </Route>
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;