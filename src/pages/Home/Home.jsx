import React from "react";
import Book from "./Book";
import Overview from "./Overview";
import Slide from "./Slide";
import Thongke from "./Thongke";

function Home() {
  return (
    <div className="wapper">
      {/* Slide */}
      <Slide />
      <Overview />
      <Book />
      <Thongke />
    </div>
  );
}

export default Home;
