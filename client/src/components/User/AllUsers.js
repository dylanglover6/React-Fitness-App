import React from "react";
import API from '../../utils/User/API'

function getAPIUser() {
API.getUser({
  _id: "5b3d16726d1cec106935d01c"
})
}


const AllUsers = (props) => (
  <div>
     {props.children}
  </div>
);

export default AllUsers;

export {getAPIUser};