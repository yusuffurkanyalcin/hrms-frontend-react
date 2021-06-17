import "./App.css";

import "semantic-ui-css/semantic.min.css";
import Navigation from "./layouts/Navigation";
import ActiveJobAdvertisementList from "./layouts/ActiveJobAdvertisementList";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <ActiveJobAdvertisementList/>
    </div>
  );
}

export default App;
