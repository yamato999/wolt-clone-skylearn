import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/restaurant/:restaurantId" element={<Restaurant />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
