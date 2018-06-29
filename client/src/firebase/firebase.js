import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBx6sqLVFqLl76q0EjBH5pZMZ1SGt9WaLg",
  authDomain: "reactfirebaseauth-27c9c.firebaseapp.com",
  databaseURL: "https://reactfirebaseauth-27c9c.firebaseio.com",
  projectId: "reactfirebaseauth-27c9c",
  storageBucket: "reactfirebaseauth-27c9c.appspot.com",
  messagingSenderId: "500552915791"
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