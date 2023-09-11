import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./screens/User";
import Room from "./screens/Room";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </Router>
  );
};

export default App;
