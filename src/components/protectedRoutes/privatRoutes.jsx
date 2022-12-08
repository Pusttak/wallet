import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivatRoutes() {
  let isLoggedIn = useSelector(state => state.userInformation.isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
