import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import { Col, Row, Container } from '../Grid';
import { Input, FormBtn } from './ProfileForm';
import './ProfileForm/UserData.css';
import { ProgressBar, FormGroup, FormControl } from 'react-bootstrap';

const styles = {
  textAlign: "center",
}

const SignUpPage = ({ history }) =>
  <div className="form">
    <Container fluid>
      <Row>
        <Col size="sm-12">
          <Row>
            <Col size="sm-4"></Col>
            <Col size="sm-4">
              <div className="input-background">
              <p className="logo" ><span className="ebc">E</span>very<span className="ebc">B</span>ody<span className="ebc">F</span>its</p>
                <h3 style={styles}>Sign Up!</h3>
                <SignUpForm history={history} />
                <p>
                  Already have an account? 
                  {' '}
                  <Link to={routes.LANDING}>Sign In</Link>
                </p>
              </div>
            </Col>
            <Col size="sm-4" ></Col>
          </Row>
        </Col>
      </Row>
    </Container>  
  </div>

const INITIAL_STATE = {
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

  getPasswordOneValidationState() {
    let length = this.state.passwordOne.length;
    if (length > 5) return 'success';
    else if (length > 0) return 'error';
    return null;
  }
  getPasswordTwoValidationState() {
    let length = this.state.passwordTwo.length;
    let passwordOne = this.state.passwordOne;
    let passwordTwo = this.state.passwordTwo;
    if (length < 1) return null;
    else if (passwordOne !== passwordTwo) return 'error';
    else if (passwordOne === passwordTwo) return 'success';
    return null;
  }

  render() {

    const {
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <Input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <FormGroup
        controlId="passwordOneLengthValidation"
        validationState={this.getPasswordOneValidationState()}>
        <FormControl
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <FormControl.Feedback />
        </FormGroup>
        <FormGroup
        controlId="passwordTwoLengthValidation"
        validationState={this.getPasswordTwoValidationState()}>
        <FormControl
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
        <FormControl.Feedback />
        </FormGroup>
        <FormBtn disabled={isInvalid} type="submit">
          Sign Up
        </FormBtn>

        { error && <p>{error.message}</p> }
        <ProgressBar active now={10} />
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