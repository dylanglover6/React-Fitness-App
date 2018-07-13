import React, { Component } from 'react';
import { auth } from '../../firebase';
import { Col, Row, Container } from '../Grid';
import { Input, FormBtn } from './ProfileForm';
import './ProfileForm/UserData.css';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
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
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <div className="form">
        <Container fluid>
          <Row>
            <Col size="sm-12">
              <Row>
                <Col size="sm-2 md-3 lg-4" ></Col>
                <Col size="sm-8 md-6 lg-4">
                  <div className="input-background">
                    <form onSubmit={this.onSubmit}>
                      <Input
                        value={passwordOne}
                        onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                        type="password"
                        placeholder="New Password"
                      />
                      <Input
                        value={passwordTwo}
                        onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                        type="password"
                        placeholder="Confirm New Password"
                      />
                      <FormBtn disabled={isInvalid} type="submit">
                        Reset My Password
                      </FormBtn>

                      { error && <p>{error.message}</p> }
                    </form>
                  </div>
                </Col>
                <Col size="sm-2 md-3 lg-4" ></Col>
              </Row>
            </Col>
          </Row>
        </Container>  
      </div>
    );
  }
}

export default PasswordChangeForm;