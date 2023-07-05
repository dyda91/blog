import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import Postagem from './components/postagem/postagem';
import Noticia from './components/noticia/noticia';
import Error from './components/error/error';
import { ContextProvider } from "./context/context"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/postar",
        element: <Postagem />
      },
      {
        path:"/noticia/:id",
        element: <Noticia />
      }

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
reportWebVitals();
