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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<OtherComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
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

const MainLayout = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
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
