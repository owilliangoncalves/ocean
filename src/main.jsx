import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/errorPage/ErrorPage';
import Problema from './components/problema/Problema';
import Solucao from './components/solucao/Solucao';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/desafio',
    element: <Problema />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/estudos',
    element: <Problema />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/problema',
    element: <Problema />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/solucao',
    element: <Solucao />,
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
