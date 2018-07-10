import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import { Col, Row, Container } from '../Grid';
import { Input, FormBtn } from './ProfileForm';
import './ProfileForm/UserData.css';
import { ProgressBar } from 'react-bootstrap';

const SignUpPage = ({ history }) =>
  <div className="form">
    <Container fluid>
      <Row>
        <Col size="sm-12">
          <Row>
            <Col size="sm-2 md-3 lg-4" ></Col>
            <Col size="sm-8 md-6 lg-4">
              <div className="input-background">
                <h3>SignUp</h3>
                <SignUpForm history={history} />
                <p>
                  Already have an account? 
                  {' '}
                  <Link to={routes.LANDING}>Sign In</Link>
                </p>
              </div>
            </Col>
            <Col size="sm-2 md-3 lg-4" ></Col>
          </Row>
        </Col>
      </Row>
    </Container>  
  </div>

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history, 
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.USER_DATA);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {

    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <Input
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Username"
        />
        <Input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <Input
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <Input
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
        <FormBtn disabled={isInvalid} type="submit">
          Sign Up
        </FormBtn>

        { error && <p>{error.message}</p> }
        <ProgressBar active now={30} />
      </form>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};