import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Service from "./components/Service";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import AboutUs from "./components/AboutUs";
import Basket from "./components/Basket";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartContext";

import { Circles } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const BooleanFlag = createContext();

function App() {
  const [page, setPage] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 4000);
  }, []);

  return (
    <CartProvider>
      <BooleanFlag.Provider value={{ page, setPage }}>
        {loader ? (
          <div className="preloader">
            <Circles
              height="80"
              width="80"
              color="#fb4a36"
              ariaLabel="circles-loading"
              visible={true}
            />
          </div>
        ) : (
          <Router
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <ToastContainer position="top-center" autoClose={2000} />
            <Routes>
              {/* Home Page - all sections */}
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <Home />
                    <Service />
                    <Menu />
                    <Reservation />
                    <AboutUs />
                    <Footer />
                  </>
                }
              />

              {/* Dedicated pages */}
              <Route
                path="/menu"
                element={
                  <>
                    <Header />
                    <Menu />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/reservation"
                element={
                  <>
                    <Header />
                    <Reservation />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/service"
                element={
                  <>
                    <Header />
                    <Service />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/about"
                element={
                  <>
                    <Header />
                    <AboutUs />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/basket"
                element={
                  <>
                    <Header />
                    <Basket />
                    <Footer />
                  </>
                }
              />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Router>
        )}
      </BooleanFlag.Provider>
    </CartProvider>
  );
}

export default App;
