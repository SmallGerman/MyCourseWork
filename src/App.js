import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import SpecialOffers from "./components/special-offers.component";
import Footer from "./components/footer.component";

function App() {
  return (
      <Router>
          <div className="no-container">
              <Navbar />
              <Route path="/" exact component={ExercisesList} />
              <Route path="/create" component={CreateExercise} />
              <Route path="/user" component={CreateUser} />
              <Route path="/offer" component={SpecialOffers} />
              <Footer />
          </div>
      </Router>
  );
}

export default App;

