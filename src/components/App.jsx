import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PrivatRoutes from './protectedRoutes/privatRoutes';
import PublicRoutes from './protectedRoutes/publicRoutes';

import LoginPage from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage/dashboardPage';
import RegistrationPage from '../pages/registrationPage/index';

import { CurrencyPage } from '../pages/currencyPage/currencyPage';

import { IsLoggedIn } from './isLoggedIn/isLoggedIn';

const HomeTab = lazy(() => import('./homeTab/homeTab'));
const DiagramTab = lazy(() => import('./diagramTab/diagramTab'));

export const App = () => {
  let token = useSelector(state => state.userInformation.token);
  // ------------------
  return (
    <>
      {token ? <IsLoggedIn /> : <></>}
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<PrivatRoutes />}>
          <Route path="/dashboard" element={<DashboardPage />}>
            <Route path="homeTab" element={<HomeTab />} />
            <Route path="diagramTab" element={<DiagramTab />} />
            <Route path="currency" element={<CurrencyPage />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};
