import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layout/DashboardLayout';
import Main from '../layout/Main';
import Blog from '../Pages/Blog/Blog';
import AddProduct from '../Pages/Dashboard/AddProduct/AddProduct';
import AllBuyers from '../Pages/Dashboard/AllBuyers/AllBuyers';
import AllSellers from '../Pages/Dashboard/AllSellers/AllSellers';
import MyOrders from '../Pages/Dashboard/MyOrders/MyOrders';
import MyProducts from '../Pages/Dashboard/MyProducts/MyProducts';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import Login from '../Pages/Registration/Login';
import Signup from '../Pages/Registration/Signup';
import AdminRoute from './AdminRoute/AdminRoute';
import BuyerRoute from './BuyerRoute/BuyerRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import SellerRoute from './SellerRoute/SellerRoute';


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
                loader: ({params}) => fetch(`http://localhost:5000/products/categories/${params.categoryId}`)
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: "/dashboard/myorders",
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute> 
                
            },
            {
                path: "/dashboard/allsellers",
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
                
            },
            {
                path: "/dashboard/allbuyers",
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
                
            },
            {
                path: "/dashboard/addproduct",
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
                
            },
            {
                path: "/dashboard/myproducts",
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
                
            },
        ]
    },
    {
        path: '/*', 
        element: <Error></Error>
    }
]);