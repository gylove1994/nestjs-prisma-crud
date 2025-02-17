import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/index.css';
import { RouterProvider } from 'react-router';
import { router } from '@/routers/router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
