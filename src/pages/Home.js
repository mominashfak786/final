import {  useState } from "react";
import "../style/home.css";
import logo2 from "../assets/oterhs/logo -light.png";
import video from "../assets/video/Business Consulting Background - iStock Video.mp4";

import Enterprise from "./Enterprise";
import Individul from "./Individul";
import useTitle from "../hooks/usetitle";

const Home = () => {
  const [element, setElement] = useState(false);
  const [enterprise, setEnterprise] = useState(false);
  const [individul, setIndividul] = useState(false);
  const [type, setType] = useState("");
  useTitle("Welcome to letusmaintain");

  const handleEnterpriseClick = () => {
    setEnterprise(true);
    setIndividul(false);
  };

  const handleIndividulClick = () => {
    setEnterprise(false);
    setIndividul(true);
  };

  return (
    <div className="size">
      {element ? (
        <></>
      ) : (
        <div className={`${enterprise || individul ? "hidden" : ""}`}>
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
            <p onClick={handleEnterpriseClick} className="floating-link cursor-pointer">
              <div className="floating-enterprice">
                <h2 className="title-secondary">Enterprise</h2>
              </div>
            </p>
            <p onClick={handleIndividulClick} className="floating-link cursor-pointer">
              <div className="floating-customer">
                <h2 className="title-secondary">Individual</h2>
              </div>
            </p>
          </div>
        </div>
      )}
      {enterprise && <Enterprise />}
      {individul && <Individul />}
    </div>
  );
};

export default Home;
