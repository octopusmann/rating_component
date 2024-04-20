import "./components/redirectedContainer.css";
import "./components/mainContainer.css";
import MainContainer from "./components/mainContainer";
import RedirectedPage from "./components/redirectedContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/redirected" element={<RedirectedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
