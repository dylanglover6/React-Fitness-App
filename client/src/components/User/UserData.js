import React, { Component } from "react";
import { Col, Row, Container } from '../Grid';
import { Input, FormBtn } from "./ProfileForm";
import Jumbotron from "../Jumbotron";
import API from "../../utils/User/API";
import { FileInput, imageFile } from './FileInput';

class UserData extends Component {

  state = {   
    userData: [],
    username: '',
    age: '',
    gender: '',
    weight: ''
};

componentDidMount() {
  this.getUserDataHandler();
}

getUserDataHandler() {
  // API.getUser()
  // .then(res => this.setState({userData: res.data}))
  // .catch(err => console.log(err));
}

handleInputChange = event => {
  const {name, value} = event.target;
  this.setState({
    [name]: value
  });
}

handleFormSubmit = event => {
// Start: To save user's email to mongodb
  event.preventDefault();
  API.saveUser({
    username: this.state.username,
    fileInput: imageFile,
    age: this.state.age,
    gender: this.state.gender,
    weight: this.state.weight
  })
  .then(console.log(`
    UserName: ${this.state.username}
    Age: ${this.state.age}
    Gender: ${this.state.gender}
    Weight: ${this.state.weight}
  `))
  .then(res => console.log(imageFile))
  .catch(err => this.setState({ error: err.message }));      
  // End: To save user's email to mongodb
}

render() {

      return(
        <div>
          <div>
            <Container fluid>
              <Row>
                <Col size="md-12">
                  <Jumbotron>
                  <form>
                    <Input
                      name="username"
                      type="text"
                      value={this.state.username}
                      onChange={this.handleInputChange}
                      placeholder="Username (required)"
                    />
                    <Input
                      name="age"
                      type="text"
                      value={this.state.age}
                      onChange={this.handleInputChange}
                      placeholder="Date of Birth in: MMDDYYYY"
                    />       
                    <Input
                      name="gender"
                      type="text"
                      value={this.state.gender}
                      onChange={this.handleInputChange}
                      placeholder="Gender"
                    />       
                    <Input
                      name="weight"
                      type="text"
                      value={this.state.weight}
                      onChange={this.handleInputChange}
                      placeholder="Weight in lbs"
                    />
                    <FormBtn
                      disabled={!(this.state.username)}
                      onClick={this.handleFormSubmit}>
                  
                      Submit Profile Information
                    </FormBtn>
                  </form>
                </Jumbotron>
              </Col>
            </Row>
          </Container>      
        </div>
      </div>
    );
  }
}

export default UserData;
