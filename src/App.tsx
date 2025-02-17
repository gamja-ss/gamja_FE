import { Navigate, Route, Routes } from "react-router-dom";

import Callback from "./page/auth/Callback";
import Home from "./page/home/Home";
import Inventory from "./page/inventory/Inventory";
import Layout from "./components/layout/Layout";
import Login from "./page/auth/Login";
import Challenge from "./page/challenge/Challenge";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/auth/login/callback" element={<Callback />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/inventory" element={<Navigate to="/inventory/closet" replace />} />
        <Route path="/inventory/:tab" element={<Inventory />} />
        <Route path="/challenge" element={<Challenge />} />
      </Route>
    </Routes>
  );
}

export default App;
