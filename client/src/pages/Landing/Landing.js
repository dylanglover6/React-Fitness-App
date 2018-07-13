import React from 'react';
import SignInForm from '../../components/User/SignIn';
import './Landing.css';

const LandingPage = ({history}) =>
  <div>
    <SignInForm history={history} />
  </div>
export default LandingPage;
