import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import {Headers}  from "./components/index"
import {Home,Quiz,Scrimble} from "./pages/index"
function App() {
  return (
    <div>
        <BrowserRouter>
        <Headers/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/quiz" element={<Quiz/>}/>
              <Route path="/scrimble" element={<Scrimble/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
