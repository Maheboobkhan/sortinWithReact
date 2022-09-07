import "./App.css";
import Bubble from "./component/Bubble/Bubble";
import Selection from "./component/Selection/Selection";
import Insertion from "./component/Insertion/Insertion";
import Home from "./component/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bubble" element={<Bubble />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/insertion" element={<Insertion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
