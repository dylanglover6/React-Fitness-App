import React from 'react';
import API from '../../utils/User/API';

class Profile extends React.Component {

  state = {
    user: {}
  };

  componentDidMount() {
    let email = "stephWins@stephWins.com"
    API.getUserByEmail(email)
    .then(console.log(email))
    .then(res => console.log(res.data))
    // .then(res => this.setState({ user: res.data }))
    .catch(err => console.log(err));
  }

  render() {
  
    return(
      <div>
        <h1>UserName: {this.state.user.username}</h1>
        <h1>DOB: {this.state.user.age}</h1>
        <h1>Gender: {this.state.user.gender}</h1>
        
      </div>
    );
  }

}

export default Profile;