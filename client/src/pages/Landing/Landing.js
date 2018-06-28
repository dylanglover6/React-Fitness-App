import { Container } from "../../components/Grid";
import React from 'react';
import SignInForm from '../../components/User/SignIn';
import SignUpForm from '../../components/User/SignUp';

const LandingPage = ({history}) =>
  <Container fluid>
    <div>
      <div>
        <h1>Landing Page</h1>
      </div>
      <div>
        <SignInForm history={history} />
      </div>
      <div>
        <SignUpForm history={history} />
      </div>
    </div>
  </Container>
export default LandingPage;
