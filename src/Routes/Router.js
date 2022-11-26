import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Blog from '../Pages/Blog/Blog';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import Login from '../Pages/Registration/Login';
import Signup from '../Pages/Registration/Signup';

export const router = createBrowserRouter([

    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/category/:categoryId",
                element: <Products></Products>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.categoryId}`)
            },

        ]
    },
    {
        path: '/*', 
        element: <Error></Error>
    }
]);