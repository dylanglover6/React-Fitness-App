import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import ViewWorkouts from "./pages/ViewWorkouts";
import StartWorkout from "./pages/StartWorkout";
import LandingPage from './pages/Landing/Landing';
import SignUpPage from './components/User/SignUp';
import SignInPage from './components/User/SignIn';
import PasswordForgetPage from './components/User/PasswordForget';
import HomePage from './pages/Home/Home';
import AccountPage from './components/User/Account';
import * as routes from './constants/routes';
import withAuthentication from './components/User/withAuthentication';
import Favorites from './pages/Favorites/Favorites';
import UserProfile from './pages/UserProfile';
import UserHistory from './pages/UserHistory';
import UserData from './components/User/ProfileForm/UserData';
import AllUsers from './components/User/AllUsers';
import FileInput from './components/User/FileInput/FileInput';


const App = () => (
  <Router>
    <div>
        <Route exact path={routes.START_WORKOUT} component={() => <StartWorkout />} />
        <Route exact path={routes.VIEW_WORKOUTS} component={() => <ViewWorkouts />} />
        <Route exact path={routes.FAVORITE_WORKOUTS} component={() => <Favorites />} />
        <Route exact path={routes.USER_PROFILE} component={() => <UserProfile />} />
        <Route exact path={routes.USER_HISTORY} component={() => <UserHistory />} />
        <Route exact path={routes.NO_MATCH} component ={() => <NoMatch />} />

        {/* Firebase User Auth Routes start here.  */}
        <Route exact path={routes.LANDING} component={() => <LandingPage />} />
        <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
        <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
        <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
        <Route exact path={routes.HOME} component={() => <HomePage />} />
        <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
        <Route exact path={routes.USER_DATA} component={() => <UserData />} />
        <Route exact path={routes.USERS} component={() => <AllUsers />} />
        <Route exact path={routes.FILE_INPUT} component={() => <FileInput />} />
        {/* Firebase User Auth Routes end here.  */}
      
    </div>
  </Router>
);

export default withAuthentication(App);
