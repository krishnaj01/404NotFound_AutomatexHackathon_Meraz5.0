import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LandingHeader from './components/custom/LandingHeader';
import Home from './components/HomePage/Home';
import Footer from './components/custom/Footer';
import Lost from './components/custom/Lost';
import Found from './components/custom/Found';

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/lost",
    element: <Lost />,
  },
  {
    path: "/found",
    element: <Found />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <LandingHeader/>
      <Toaster />
      <RouterProvider router={route} />
      <Footer />
    </GoogleOAuthProvider>
  </StrictMode>
);
