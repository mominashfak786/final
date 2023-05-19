import { useEffect, useState } from "react";
import "../style/home.css";
import logo2 from "../assets/oterhs/logo -light.png";
import video from "../assets/video/Business Consulting Background - iStock Video.mp4";

import Enterprise from "./Enterprise";
import Individul from "./Individul";
import useTitle from "../hooks/usetitle";

const Home = () => {
  const [element, setElement] = useState(false);
  const [enterprice, setEnterprice] = useState(false);
  const [indivisul, setIndivisul] = useState(false);
  const [type, setType] = useState("");
  useTitle("Welcome to letusmaintain");

  return (
    <div className="size">
  {element ? (
    <></>
  ) : (
    <div className={` ${enterprice || type === "individual" ? "hidden" : ""}`}>
      <nav className="navbar items-center">
        <img src={logo2} alt="Company Logo" className="logo" />
      </nav>
      <video
        src={video}
        autoPlay
        muted
        loop
        className="abosolute w-screen h-screen object-cover"
      ></video>
      <div className="floating-container flex">
        <p
          onClick={() => setEnterprice(true)}
          className="floating-link cursor-pointer"
        >
          <div className="floating-enterprice">
            <h2 className="title-secondary">Enterprise</h2>
          </div>
        </p>
        <p
          onClick={() => setIndivisul(true)}
          className="floating-link cursor-pointer"
        >
          <div className="floating-customer">
            <h2 className="title-secondary">Individual</h2>
          </div>
        </p>
      </div>
    </div>
  )}
  {enterprice && <Enterprise />}
  {indivisul && <Individul />}
</div>

    
  );
};

export default Home;
