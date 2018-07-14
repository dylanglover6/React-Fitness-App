import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import { Col, Row, Container } from '../Grid';
import { Input, FormBtn } from './ProfileForm';
import './ProfileForm/UserData.css';

const PasswordForgetPage = () =>
  <div className="form">
    <Container fluid>
      <Row>
        <Col size="sm-12">
          <Row>
            <Col size="sm-2 md-3 lg-4" ></Col>
            <Col size="sm-8 md-6 lg-4">
              <div className="input-background">
              <p className="logo" ><span className="ebc">E</span>very<span className="ebc">B</span>ody<span className="ebc">F</span>its</p>
                <h4>Reset your password via email.</h4>
                <PasswordForgetForm />
                <p>
                  Nevermind 
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

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <Input
          value={this.state.email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <FormBtn disabled={isInvalid} type="submit">
          Reset My Password
        </FormBtn>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const PasswordForgetLink = () =>
  <p>
    <Link to="/pw-forget">Forgot Password?</Link>
  </p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};