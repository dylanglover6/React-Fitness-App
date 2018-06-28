import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import ViewWorkouts from "./pages/ViewWorkouts";
import StartWorkout from "./pages/StartWorkout";
import NutritionDietPlan from "./pages/NutritionDietPlan";
import UserProfile from "./pages/UserProfile";
import LandingPage from './pages/Landing/Landing';
import SignUpPage from './components/User/SignUp';
import SignInPage from './components/User/SignIn';
import PasswordForgetPage from './components/User/PasswordForget';
import HomePage from './pages/Home/Home';
import AccountPage from './components/User/Account';
import * as routes from './constants/routes';
import withAuthentication from './components/User/withAuthentication';
import Navigation from "./components/Navigation";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Navigation />
      
        {/* <Route exact path="/" component={ViewWorkouts} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/start" component={StartWorkout} />
        <Route exact path="/nutrition" component={NutritionDietPlan} />
        <Route component={NoMatch} /> */}
        {/* Firebase User Auth Routes start here.  */}
        <Route exact path={routes.LANDING} component={() => <LandingPage />} />
        <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
        <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
        <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
        <Route exact path={routes.HOME} component={() => <HomePage />} />
        <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
        {/* Firebase User Auth Routes end here.  */}
      
    </div>
  </Router>
);

export default withAuthentication(App);
