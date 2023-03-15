import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./modules/login/Login";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
