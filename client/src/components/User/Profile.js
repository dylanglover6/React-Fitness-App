import React from 'react';
import firebase from 'firebase';
import API from '../../utils/User/API';

const authUser = firebase.auth().currentUser;
if (authUser != null) {
  authUser.providerData.forEach(function (profile) {
    const email = profile.email;
    console.log("  Email: " + email);
    return email;
  });
}

class ProfileInfo extends React.Component {  

  state ={
    user: ''
  }

  
  getUserInfo() {  
    API.getUser(this.email)
    .then(res => this.setState({ user: res.data }))
    .then(console.log(this.state.user))
    .catch(err => console.log(err));

  }

  componentDidMount(){
    this.getUserInfo()
  }
  
  
  render() {
    

    return (
    <div>
  
      Put profile info here.
  
  
  </div>

    );
  }
}

export default ProfileInfo;


