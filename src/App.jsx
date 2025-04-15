import React from "react";
import Navbar from "./components/Navbar";
import Page from "./components/Page";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <Page />
      </main>
      <Footer />
    </>
  );
};

export default App;
