import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.css";
import "./css/master.scss";
import AdminHome from "./components/AdminHome";
import SSHome from "./components/SSHome";
import Service from "./components/Service";
import Careers from "./components/Careers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Consulting from "./components/Consulting";
import Header from "./components/header/Header";
import { SLIDERS, MENULINK, ADMINMENULINK } from "./content";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { isUndefind } from "lodash";
import Footer from "./components/footer/Footer";

function App() {
  const stringifiedPerson = JSON.parse(localStorage?.getItem("user-info"));
  let loginUser = stringifiedPerson?.loggedinUser?.userName;
  const [userLogin, setUserLogin] = useState(
    JSON.parse(localStorage.getItem("user-info"))?.loggedinUser?.userName
  );
  const [successMsg, setSuccessMsg] = useState("");
  const [serviceClicked, setServiceClicked] = useState({});
  const url = window.location.pathname;
  console.log(url);
  useEffect(() => {
    setUserLogin(userLogin);
  }, [userLogin]);
  const homeCallback = (e) => {
    setUserLogin(userLogin);
    console.log(localStorage.getItem("user-info")?.loggedinUser?.userName);
    window.location.reload();
  };
  useEffect(() => {
    setUserLogin(userLogin);
  }, []);

  const loginCallback = () => {
    setUserLogin(userLogin);
    window.location.reload();
  };
  const successMessage = (e) => {
    if (e) setSuccessMsg(e);
    console.log(e);
  };
  const itemClick = (e) => {
    setServiceClicked(e.id);
    window.location.href = "/services";
    console.log(serviceClicked);
  };
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          {userLogin === "admin" ? (
            <Header
              menuLink={ADMINMENULINK}
              className={"app-header"}
              type={"adminpage"}
              fluid={true}
              fixed="top"
              loggedin={stringifiedPerson}
              clickEvent={(e) => homeCallback()}
            />
          ) : userLogin && userLogin !== "admin" ? (
            <Header
              menuLink={MENULINK}
              selectedMenu={url === "/" ? "home" : url.replace("/", "")}
              className={"app-header"}
              type={"selfpage"}
              fixed=""
              loggedin={stringifiedPerson}
              clickEvent={(e) => homeCallback()}
            />
          ) : (
            <Header
              menuLink={MENULINK}
              selectedMenu={url === "/" ? "home" : url.replace("/", "")}
              className={"app-header"}
              type={"homepage"}
              fixed=""
              clickEvent={(e) => homeCallback()}
            />
          )}
        </>
        <Routes>
          <>
            <Route
              path="/"
              element={<Home clickedItem={(e) => itemClick(e)} />}
            />
            <Route index element={<Home clickedItem={(e) => itemClick(e)} />} />
            <Route
              path="/home"
              element={<Home clickedItem={(e) => itemClick(e)} />}
            />
            <Route index element={<Home />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/self" element={<SSHome />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route
              path="/services"
              element={<Service serviceSelected={serviceClicked} />}
            />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </>
          <Route
            path="/login"
            element={
              <Login loginCall={loginCallback} signupSuccess={successMsg} />
            }
          />
          <Route
            path="/signup"
            element={<SignUp successMessage={(e) => successMessage(e)} />}
          />
        </Routes>
        <Footer type={userLogin === "admin" ? "admin" : ""} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
