import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layout/DashboardLayout';
import Main from '../layout/Main';
import Blog from '../Pages/Blog/Blog';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import Login from '../Pages/Registration/Login';
import Signup from '../Pages/Registration/Signup';
import PrivateRoute from './PrivateRoute/PrivateRoute';


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
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.categoryId}`)
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        loader: ()=> fetch(`http://localhost:5000/users`),
        children: [
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard> 
                
            },
        ]
    },
    {
        path: '/*', 
        element: <Error></Error>
    }
]);