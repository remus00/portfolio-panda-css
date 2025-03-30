import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import { HomePage } from './pages/home-page';
import { NotFound } from './pages/not-found';
import { ThanksPage } from './pages/thanks-page';

const router = createBrowserRouter([
    { path: '/', element: <HomePage />, errorElement: <NotFound /> },
    { path: '/thanks', element: <ThanksPage /> },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
