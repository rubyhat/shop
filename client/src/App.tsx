import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import RouteList from "./RouterList";
import SubHeader from "./components/SubHeader";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <SubHeader />
        <Header />
        <main className="content">
          <RouteList />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
