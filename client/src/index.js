import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Home from './views/Home/Home';
import Signup from './views/Signup/Signup';
import Login from './views/Login/Login';
import Blog from './views/Blog/Blog';

import UpdateBlog from './views/UpdateBlog/UpdateBlog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
 
  {
    path: "/myblogs",
    element: <Blog />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path:'/UpdateBlog/:id',
    element:<UpdateBlog/>
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
