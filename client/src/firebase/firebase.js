import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCm4iF_jT3MdNLb8L3LZMbpPXHvQS1boH4",
  authDomain: "react-fitness-app.firebaseapp.com",
  databaseURL: "https://react-fitness-app.firebaseio.com",
  projectId: "react-fitness-app",
  storageBucket: "react-fitness-app.appspot.com",
  messagingSenderId: "294945627954"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// Initialize the auth object
const auth = firebase.auth();

export {
  auth,
};