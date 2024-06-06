import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './routes/errorPage/ErrorPage';
import Problema from './components/problema/Problema';

import Solucao from './routes/solucao/Solucao';
import Home from './routes/Home';
import Estudos from './routes/Estudos';
import Desafio from './routes/desafio/Desafio'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/estudos',
      element: <Estudos />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/problema',
      element: <Problema />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/desafio',
      element: <Desafio />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/solucao',
      element: <Solucao />,
      errorElement: <ErrorPage />,
    },]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
);
