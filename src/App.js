import "./App.css";
import Adduser from "./components/AddUser";
import Navbar from "./components/Navbar";
import CodeForInterview from "./components/DashBoard";
import AllUsers from "./components/AllUsers";
import EditUser from "./components/EditUser";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CodeForInterview />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<Adduser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
