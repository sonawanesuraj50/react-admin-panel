import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminLayout } from "shared/adminLayout";
import Login from "./modules/login/Login";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<AdminLayout />}>
          <Route path="/view-client" element={<h1>Outlet</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
