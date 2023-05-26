import PropTypes from 'prop-types';
import { useAuth } from "hooks/useAuth.js"
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({component: Component, redirectTo = '/'}) => {
    const {isLoggedIn, isRefreshing} = useAuth();
    const shouldRedirect = !isLoggedIn && !isRefreshing;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}

PrivateRoute.propTypes = {
    component: PropTypes.element.isRequired,
    redirectTo: PropTypes.string,
  };