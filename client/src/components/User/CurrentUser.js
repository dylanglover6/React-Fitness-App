import React from "react";
import AuthUserContext from './AuthUserContext';
import withAuthorization from './withAuthorization';


const CurrentUser = (props) => (

  <AuthUserContext.Consumer>
    {authUser =>
      <div>
      {authUser.email}
      {props.children}
      </div>
    }
  </AuthUserContext.Consumer>

);


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(CurrentUser);



