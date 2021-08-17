import "./App.css";

import "semantic-ui-css/semantic.min.css";
import Navigation from "./layouts/Navigation";
import Dashboard from "./pages/Dashboard";
import SignUpCandidate from "./pages/SignUpCandidate";
import SignUpEmployer from "./pages/SignUpEmployer";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container fluid>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/sign-up-candidate" component={SignUpCandidate} />
        <Route exact path="/sign-up-employer" component={SignUpEmployer} />
        <Route exact path="/add-job-advertisement" component={Dashboard}/>
      </Container>
    </div>
  );
}

export default App;
