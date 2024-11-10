import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Landing from './components/custom/Landing';
import LandingHeader from './components/custom/LandingHeader';
import Home from './components/HomePage/Home';
import Footer from './components/custom/Footer';

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
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
  </StrictMode>,
);
