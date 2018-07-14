import React from 'react';
import firebase from 'firebase';
import API from '../../utils/User/API';

 let email = ""

class ProfileInfo extends React.Component {  


  state ={
    user: '',
    email: ''
  }
 getEmail() { 
   
  const user = firebase.auth().currentUser;
  if (user != null) {
  user.providerData.forEach(function (profile) {
    email = profile.email;
    console.log(" Email: " + email);
    
  });

  
  
  
    API.getUserbyEmail(email)
    .then(res => this.setState({ user: res.data }))
    //.then(console.log(this.state.user))
    //.then(console.log(this.state.email))
    .catch(err => console.log(err));
} 
  }
 
  componentDidMount(){
    
    this.getEmail()
  }
  
  
  render() {
  console.log(this.state.user)  

    return (
    <div>
  
      Put profile info here.
  
  
  </div>

    );
  }
}

export default ProfileInfo;


