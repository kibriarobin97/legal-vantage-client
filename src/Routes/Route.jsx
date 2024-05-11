import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Services from "../Pages/Services";
import ViewDetails from "../Pages/ViewDetails";
import AddService from "../Pages/AddService";
import Purchase from "../Pages/Purchase";
import ManageService from "../Pages/ManageService";
import PrivateRoute from "./PrivateRoute";
import UpdateService from "../Pages/UpdateService";
import ErrorPage from "../Pages/ErrorPage";
import BookedService from "../Pages/BookedService";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/services`)
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/all-services`)
            },
            {
                path: '/service-details/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/add-service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/purchase/:id',
                element: <PrivateRoute><Purchase></Purchase></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/services/${params.id}`)
            },
            {
                path: '/manage-service',
                element: <PrivateRoute><ManageService></ManageService></PrivateRoute>
            },
            {
                path: '/update-service/:id',
                element: <PrivateRoute><UpdateService></UpdateService></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/services/${params.id}`)
            },
            {
                path: '/booked-service',
                element: <PrivateRoute><BookedService></BookedService></PrivateRoute>
            }
        ]
    }
])

export default router;