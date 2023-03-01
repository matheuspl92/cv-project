import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";
import './App.css'

const App = () => {
  return (
    <div id="main-container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
