import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import ViewWorkouts from "./pages/ViewWorkouts";
import StartWorkout from "./pages/StartWorkout";
import NutritionDietPlan from "./pages/NutritionDietPlan";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ViewWorkouts} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/start" component={StartWorkout} />
        <Route exact path="/nutrition" component={NutritionDietPlan} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
