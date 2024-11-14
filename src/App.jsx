import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
// import MainContent from "./components/MainContent/MainContent";
import RoutesConfig from "./routes/RoutesConfig";
// import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <RoutesConfig />
        {/* <MainContent /> */}
        {/* <Home/> */}
      </div>
    </Router>
  );
};

export default App;
