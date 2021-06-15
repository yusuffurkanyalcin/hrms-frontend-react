import "./App.css";

import "semantic-ui-css/semantic.min.css";
import Navigation from "./layouts/Navigation";
import AddJobAdvertisement from "./pages/AddJobAdvertisement";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <AddJobAdvertisement/>
    </div>
  );
}

export default App;
