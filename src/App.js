
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Calculator from "./Components/Calculator";
import Portfolio from "./Components/Portfolio";
import Homepage from "./Components/Homepage";

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route path="/calculator" element={<Calculator/>} />
   <Route path="/mohanportfolio" element={<Portfolio/>} />
   <Route path="/" element={<Homepage/>} />

   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
