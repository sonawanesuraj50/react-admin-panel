import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Paths } from "shared";
import { AdminLayout } from "shared/adminLayout";
import Login from "./modules/login/Login";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path={Paths.login} element={<Login />} />
        <Route element={<AdminLayout />}>
          <Route path={Paths.view} element={<h1>Outlet</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
