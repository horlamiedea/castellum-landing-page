import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";




function App() {


  return (
    <>
      {/* <NetworkStatus /> */}
      <Router>
  
        <Routes>
          <Route path="/" element={<Home />} />
         
         
        </Routes>
      </Router>
    </>
  );
}

export default App;
