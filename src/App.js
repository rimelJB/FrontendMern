import "./App.css";
import React, { useEffect } from "react";
import Nav from "../src/component/Nav";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import Items from "../src/Pages/items/Items";
import Notfound from "./component/Notfound";
import Dashboard from "../src/Pages/dashboard/Dashboard";
import Description from "../src/Pages/description/Description";
import Register from "../src/Pages/register/Register";
import Login from "../src/Pages/login/Login";
import { auth } from "../src/action/actionUser.js";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./component/Footer";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const error = useSelector((state) => state.userReducer.error);

  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/items" element={<Items/>} />
          <Route
            exact
            path="/items/description/:id"
            element={<Description />}
          />
          {isAuth ? (
            <Route exact path="/dashboard" element={<Dashboard/>} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}
          {isAuth ? (
            <Route path="/login" element={<Navigate to="/dashboard" />} />
          ) : (
            <Route exact path="/login" element={<Login />} />
          )}
          {isAuth ? (
            <Route path="/register" element={<Navigate to="/dashboard" />} />
          ) : (
            <Route exact path="/register" element={<Register />} />
          )}

          <Route exact path="" element={<Notfound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
