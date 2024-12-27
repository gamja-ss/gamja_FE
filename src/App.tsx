import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";
import Inventory from "./page/inventory/Inventory";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/inventory" element={<Navigate to="/inventory/closet" replace />} />
        <Route path="/inventory/:tab" element={<Inventory />} />
      </Route>
    </Routes>
  );
}

export default App;
