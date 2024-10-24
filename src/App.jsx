import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { action, original, comedyMovies, horrorMovies, toprated } from "./urls";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Bannar/Banner";
import RowPost from "./Components/RowPost/RowPost";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <RowPost url={original} title="Netflix Orginal" />
      <RowPost url={action} title="Action " isSmall />
      <RowPost url={comedyMovies} title="Comedy Movies" isSmall />
      <RowPost url={horrorMovies} title="Horror Movies" isSmall />
      <RowPost url={toprated} title="top-Rated" isSmall />
      <Footer />
    </>
  );
}

export default App;
