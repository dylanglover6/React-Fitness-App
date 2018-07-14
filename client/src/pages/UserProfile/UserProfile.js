import React from "react";
import Profile from '../../components/User/Profile';
import AccountPage from '../../components/User/Account';
import Navigation from "../../components/Navigation";

const UserProfile = () => (
  <div>
    <Navigation />
    <AccountPage />
    <Profile />
    
  </div>
)

export default UserProfile;