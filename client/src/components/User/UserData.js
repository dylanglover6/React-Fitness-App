import React from "react";
import { Col, Row, Container } from '../Grid';
import { Input, FormBtn } from "./ProfileForm";
import Jumbotron from "../Jumbotron";
import API from "../../utils/User/API";
import FileInput from "./FileInput";
import firebase from 'firebase';

class UserData extends React.Component {

  state = {   
    userData: [],
    username: '',
    age: '',
    gender: '',
    weight: ''
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
    username: this.state.username,
    age: this.state.age,
    gender: this.state.gender,
    weight: this.state.weight
  })
  .then(console.log(`
  email: ${user.email}
  Username: ${this.state.username}
  Age: ${this.state.age}
  Gender: ${this.state.gender}
  Weight: ${this.state.weight}
  `))
  .catch(err => this.setState({ error: err.message }));      
  // End: To save user's email to mongodb
  event.preventDefault(); 
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
                    <FileInput 
              
                    />
                    <FormBtn
                      disabled={!(this.state.username)}
                      onClick={this.handleFormSubmit}
                      >
                  
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
