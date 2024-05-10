import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import LoadingSpinner from "../Pages/LoadingSpinner";
import { AuthContext } from "../provider/AuthProvider";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    // console.log(location)

    if (loading) {
        return (
            <LoadingSpinner></LoadingSpinner>
        )

    }

    if (user) {
        return children
    }
    return <Navigate state={location?.pathname || '/'} to='/login'></Navigate>
};


PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;