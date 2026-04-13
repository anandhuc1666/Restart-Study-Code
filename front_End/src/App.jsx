import React from "react";
import Body from "./controller/Home/body/Body";
import Nav from "./controller/Navication/Nav";
import SubBody from "./controller/Home/subBody/SubBody";
import Footer from "./controller/footer/Footer";

function App() {
  return (
    <div className="min-w-min p-10 sm:bg-[#F0F0F3] font-Nunito font-semibold text-[20px] flex items-center justify-center flex-col gap-20">
      <Nav />
      <Body />
      <SubBody/>
      <Footer />
    </div>
  );
}

export default App;
