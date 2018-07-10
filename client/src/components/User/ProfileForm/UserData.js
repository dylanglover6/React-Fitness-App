import React from "react";
import withAuthorization from '../withAuthorization';
import { Col, Row, Container } from '../../Grid';
import { Input } from "./Input";
import { FormBtn } from "./FormBtn";
import API from "../../../utils/User/API";
import firebase from 'firebase';
import './UserData.css';
import { Redirect, withRouter } from 'react-router-dom';
import { ProgressBar, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class UserData extends React.Component {

  state = {  
    username: '',
    firstName: '', 
    lastName: '',
    age: '',
    gender: '',
    weight: '',
    requiresRedirect : false
};

componentDidMount() {
  // this.showFileInput();
}

handleInputChange = event => {
  const {name, value} = event.target;
  this.setState({
    [name]: value
  });
}

handleFormSubmit = event => {
  
  const user = firebase.auth().currentUser;
  if (user != null) {
    user.providerData.forEach(function (profile) {
      const email = profile.email;
      console.log("  Email: " + email);
      return email;
    });
  }

  API.saveUser({
    email: user.email,
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    username: this.state.username,
    age: this.state.age,
    gender: this.state.gender,
    weight: this.state.weight
  })
  .then(console.log(`
    email: ${user.email}
    firstName: ${this.state.firstName}
    lastName: ${this.state.lastName}
    Username: ${this.state.username}
    Age: ${this.state.age}
    Gender: ${this.state.gender}
    Weight: ${this.state.weight}
  `)).then(() => {
    this.setState({
      requiresRedirect: true
    })
  })
  .catch(err => this.setState({ error: err.message }));      
  event.preventDefault(); 
}

maybeRedirect(){
  if( this.state.requiresRedirect ){
    return <Redirect to="/file-input" />
  }
}

render() {

      return(
       
      <div className="form">
        { this.maybeRedirect() }
        <Container fluid>

          <Row>
            <Col size="sm-12">
              <Row>
                <Col size="sm-2 md-3 lg-4" ></Col>
                <Col size="sm-8 md-6 lg-4" className="input-background">
                  <div className="input-background">
                    <form>

                    <label>Username</label>
                      <Input
                        name="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        placeholder="Username (required)"
                      />

                      <label>First Name</label>
                        <Input
                          name="firstName"
                          type="text"
                          value={this.state.firstName}
                          onChange={this.handleInputChange}
                          placeholder="First Name (required)"
                        />

                      <label>Last Name</label>
                        <Input
                          name="lastName"
                          type="text"
                          value={this.state.lastName}
                          onChange={this.handleInputChange}
                          placeholder="Last Name"
                        />

                      <label>Date Of Birth</label>
                      <Input
                        name="age"
                        type="number"
                        value={this.state.age}
                        onChange={this.handleInputChange}
                        placeholder="MMDDYYYY"
                      />

                      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Gender</ControlLabel>
                        <FormControl 
                          componentClass="select" 
                          placeholder="select"
                          name="gender"
                          value={this.state.gender}
                          onChange={this.handleInputChange}>
                          <option value="Select">Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </FormControl>
                      </FormGroup>

                      <label>Weight</label>     
                      <Input
                        name="weight"
                        type="text"
                        value={this.state.weight}
                        onChange={this.handleInputChange}
                        placeholder="lbs"
                      />

                      <FormBtn
                        disabled={!(this.state.username)}
                        disabled={!(this.state.firstName)}
                        onClick={this.handleFormSubmit}
                        >
                        Submit Profile Information
                      </FormBtn>
                      <ProgressBar active now={60} />
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

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(UserData);

