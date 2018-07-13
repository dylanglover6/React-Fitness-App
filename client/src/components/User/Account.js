import React from 'react';
import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import SignOutButton from '../User/SignOut';
import { Col, Row, Container } from '../Grid';

const AccountPage = () =>
<div>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h3>Email: {authUser.email}</h3>
        <Col size="sm-12">
          <Row>
            <Col size="sm-6">
              <PasswordForgetForm />
            </Col>
            <Col size="sm-6">
              <PasswordChangeForm />
            </Col>
        </Row>
        </Col>
      </div>
    }
  </AuthUserContext.Consumer>
  <Link to={routes.HOME}>Home</Link>
  <SignOutButton />
</div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);

