import React from 'react';
import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import SignOutButton from '../User/SignOut';

const AccountPage = () =>
<div>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h3>Email: {authUser.email}</h3>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    }
  </AuthUserContext.Consumer>
  <Link to={routes.HOME}>Home</Link>
  <SignOutButton />
</div>
const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);