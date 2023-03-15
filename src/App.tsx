import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Paths } from "shared";
import Login from "./modules/login/Login";
const AdminLayout = lazy(() => import("shared/adminLayout"));
const ViewClients = lazy(() => import("./modules/viewClients/ViewClients"));

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path={Paths.login} element={<Login />} />
        <Route element={<AdminLayout />}>
          <Route path={Paths.view} element={<ViewClients />} />
          <Route path={Paths.add} element={<h1>Add client</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
