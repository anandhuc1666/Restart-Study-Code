import React from "react";
import Body from "./controller/Home/body/Body";
import Nav from "./controller/Navication/Nav";
import SubBody from "./controller/Home/subBody/SubBody";
import Footer from "./controller/footer/Footer";

function App() {
  return (
    <div className="bg-black text-[#F0F0F3] font-Nunito font-semibold flex flex-col sm:items-center items-start">
      <Nav />
      <Body />
      <SubBody/>
      <Footer />
    </div>
  );
}

export default App;
