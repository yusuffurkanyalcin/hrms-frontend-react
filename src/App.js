import "./App.css";

import "semantic-ui-css/semantic.min.css";
import Navigation from "./layouts/Navigation";
import SignUpCandidate from "./pages/SignUpCandidate";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <SignUpCandidate/>
    </div>
  );
}

export default App;
