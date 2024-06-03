import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/errorPage/ErrorPage';
import Desafio from './components/content/Desafio';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/desafio',
    element: <Desafio />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/estudos',
    element: <Desafio />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/problema',
    element: <Desafio />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/solucao',
    element: <Desafio />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
);
