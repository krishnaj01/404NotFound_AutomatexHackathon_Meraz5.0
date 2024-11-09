import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Landing from './components/custom/Landing';
import LandingHeader from './components/custom/LandingHeader';

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "landing",
        element: <Landing />,
      },
      // Add other routes as needed here
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <LandingHeader/>
      <RouterProvider router={route} />
      <Toaster />
    </GoogleOAuthProvider>
  </StrictMode>,
);
