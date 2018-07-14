import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PasswordForgetLink } from './PasswordForget';
import { SignUpLink } from './SignUp';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import { Col, Row, Container } from '../Grid';
import { Input, FormBtn } from './ProfileForm';
import './ProfileForm/UserData.css';

const SignInPage = ({ history }) =>
  <div className="form">
    <Container fluid>
      <Row>
        <Col size="sm-12">
          <Row>
            <Col size="sm-4" ></Col>
            <Col size="sm-4">
            <div className="input-background">
            <p className="logo" ><span className="ebc">E</span>very<span className="ebc">B</span>ody<span className="ebc">F</span>its</p>
            <h3>Sign in to your account.</h3>
            <SignInForm history={history} />
            <SignUpLink />
            <PasswordForgetLink />

            </div>
            </Col>
            <Col size="sm-4" ></Col>
          </Row>
        </Col>
      </Row>
    </Container>  
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>

        <Input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
  
        <Input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <FormBtn disabled={isInvalid} type="submit">
          Sign In
        </FormBtn>

        { error && <p>{error.message}</p> }
  
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};