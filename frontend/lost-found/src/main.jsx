import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LandingHeader from './components/custom/LandingHeader';
import Home from './components/custom/Home';
import Footer from './components/custom/Footer';
import Lost from './components/custom/Lost';
import Found from './components/custom/Found';
import Profile from './components/custom/ProfileForm';
import About from './components/custom/About';
import Faqs from './components/custom/Faqs';
import { CountContextProvider } from './context/countContext';

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
    path: "/about",
    element: <About />
  },
  {
    path: "/lost",
    element: <Lost />,
  },
  {
    path: "/found",
    element: <Found />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/faq",
    element: <Faqs />,
  }
]);

createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <CountContextProvider>
      <LandingHeader/>
      <Toaster />
      <RouterProvider router={route} />
      <Footer />
      </CountContextProvider>
    </GoogleOAuthProvider>
);
