import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export function RootLayout() {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}