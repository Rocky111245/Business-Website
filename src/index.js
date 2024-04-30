import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import About_Us from './pages/About_Us';
import Contact_Us from './pages/Contact_Us';
import Products from './pages/Products';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/About_Us",
        element: <About_Us/>,
      },
     {
        path: "/Contact_Us",
        element: <Contact_Us/>,
      },
      {
        path: "/Products",
        element: <Products/>,
      },
  ]);

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<RouterProvider router={router} /> );
