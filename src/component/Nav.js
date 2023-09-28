import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import LogoutIcon from "@mui/icons-material/Logout";
import React, { useEffect } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import IRENTLOGO from "../images/IRENTLOGO.png";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
const Nav = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const cart = useSelector((state) => state.shopcardReducer.cart);

  const dispatch = useDispatch();
  const logoutFunc = () => {
    localStorage.removeItem("item");
    localStorage.removeItem("token");
    dispatch({ type: "logout" });
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      var sc = window.scrollY;
      if (sc > 150) {
        elementId.style.backgroundColor = "#dabffadd";
      } else {
        elementId.style.backgroundColor = "transparent";
      }
    });
    window.scrollTo(0, 0);
  });

  return (
    <div className="container-fuild nav">
      <nav
        id="navbar"
        className="navbar navbar-expand-lg navbar-light sticky justify-content-between "
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            {" "}
            <img
              id="logoimg"
              src={IRENTLOGO}
              alt="Logo"
              style={{ width: "140px", marginRight: "800px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a
                  style={{ color: "white" }}
                  className="nav-link"
                  href="/"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ color: "white" }}
                  className="nav-link"
                  href="/items"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  Items
                </a>
              </li>
              {isAuth ? (
                <form className="container-fluid wauth form-inline">
                  <ul className="navbar-nav">
                    <li className="nav-item" style={{ marginRight: "30px" }}>
                      <Link to="/dashboard">
                        <Badge badgeContent={cart.length} color="secondary">
                          <ShoppingCartOutlinedIcon
                            style={{ color: "white", fontSize: "35px" }}
                          />
                        </Badge>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/login">
                        <span
                          style={{
                            color: "white",
                            textDecoration: "underline white"
                          }}
                          onClick={logoutFunc}
                        >
                          <LogoutIcon /> Logout
                        </span>
                      </Link>
                    </li>
                  </ul>
                </form>
              ) : (
                <>
                  <li className="nav-item">
                    <a
                      style={{ color: "white" }}
                      className="nav-link"
                      href="/login"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      style={{ color: "white" }}
                      className="nav-link"
                      href="/register"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Register
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {/* <Navbar id="navbar">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            background: "white",
            border: "white solid 0.1em",
            borderBottom: "0.2px solid grey",
          }}
        >
          <div
            style={{
              flex: "1",
              display: "flex",
              justifyContent: "space-around",
              marginTop: "5px",
              marginBottom: "2px",
            }}
          >
            <Link to="/">
              <span
                style={{ color: "black", textDecoration: "underline black" }}
              >
                Home
              </span>
            </Link>
            <Link to="/items">
              <span
                style={{ color: "black", textDecoration: "underline black" }}
              >
                Items
              </span>
            </Link>
          </div>

          <div
            style={{
              flex: "0.25",
              display: "flex",
              justifyContent: "space-around",
              marginLeft: "50%",
              marginRight: "4%",
            }}
          >
            {isAuth ? (
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "5px",
                  marginBottom: "20px",
                }}
              >
                <Link to="/login">
                  <span
                    style={{
                      color: "black",
                      textDecoration: "underline black",
                      marginRight: "2px",
                    }}
                    onClick={logoutFunc}
                  >
                    <LogoutIcon /> Logout
                  </span>
                </Link>
                <Link to="/dashboard">
                  <Badge badgeContent={cart.length} color="secondary">
                    <ShoppingCartOutlinedIcon
                      style={{ color: "black", fontSize: "35px" }}
                    />
                  </Badge>
                </Link>
              </div>
            ) : (
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "5px",
                  marginBottom: "20px",
                }}
              >
                <Link to="/register">
                  <span
                    style={{
                      color: "black",
                      textDecoration: "underline black",
                    }}
                  >
                    Register
                  </span>
                </Link>
                <Link to="/login">
                  <span
                    style={{
                      color: "black",
                      textDecoration: "underline black",
                    }}
                  >
                    LogIn
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Navbar> */}
    </div>
  );
};

export default Nav;
