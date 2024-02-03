import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import MyExpertise from "./components/MyExpertise";
import Aboutas from "./components/Aboutas";
import Portfolio from "./components/Portfolio";
import Customer from "./components/Customer";
import Contactme from "./components/Contactme";

const App = () => {
  return (
    <>
      //{" "}
      <BrowserRouter>
        //{" "}
        <Layout>
          //{" "}
          <Routes>
            //{" "}
            <Route path="/" element={<MainLayout />}>
              // <Route index element={<OtherComponents />} />
              //{" "}
            </Route>
            //{" "}
          </Routes>
          //{" "}
        </Layout>
        //{" "}
      </BrowserRouter>
      <Navbar />
      <Hero />
      <MyExpertise />
      <Aboutas />
      <Portfolio />
      <Customer />
      <Contactme />
      <Footer />
    </>
  );
};

export default App;

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

const OtherComponents = () => {
  return (
    <div className="container mx-auto">
      <Hero />
      <MyExpertise />
      <Aboutas />
      <Portfolio />
      <Customer />
      <Contactme />
    </div>
  );
};
