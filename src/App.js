// import logo from './logo.svg';
import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
// Pages
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="/products" element={<Products />} /> */}
          {/* <Route path='/sign-up' component={SignUp} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
