import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAyLwIFM8dXQgvraDhugWbuTLlk4uuYlCo",
  authDomain: "example-auth-react-7c3c5.firebaseapp.com",
  databaseURL: "https://example-auth-react-7c3c5.firebaseio.com",
  projectId: "example-auth-react-7c3c5",
  storageBucket: "example-auth-react-7c3c5.appspot.com",
  messagingSenderId: "452331052056"
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