import React, { useTransition } from 'react';
import RoutesComponent from './routes/RoutesComponent';
import { SignupForm } from './features/auth/signup/SignupForm';
// import { SignupPage } from './pages';

const App = () => {
  const { t } =useTransition();
  return (
  <div>
    <RoutesComponent />
  <h1>{t("home")}</h1>
  </div>
  );
};













export default App;
