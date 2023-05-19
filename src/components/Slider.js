import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../style/slider.css";
import bg1 from "../assets/oterhs/6.png";
import bg2 from "../assets/oterhs/enterpricebg.jpg";
import Nav from "./Nav";
import logo from "../assets/oterhs/logo -light.png";
import indu1 from "../assets/oterhs/indu1.png";
import indu2 from "../assets/oterhs/indu2.png";
import indu3 from "../assets/oterhs/indu3.png";
import indu4 from "../assets/oterhs/indu4.png";
import { Link } from "react-router-dom";
export const SliderEnterprise = () => {
  return (
    <div className="-mt-10">
      <div className="relative  h-screen">
        <Carousel
          transitionTime={0.1}
          infiniteLoop
          autoPlay={true}
          interval={1000}
          showIndicators={false}
        >
          <div>
            <p className="pt-10 pb-10">
              <img
                className="h-screen object-cover w-full md:h-screen"
                src={bg1}
                alt=""
                style={{ objectPosition: "10% 65%" }}
              />
            </p>

            <div className="absolute w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {/* <img className="w-32 mb-4" src={logo} alt="" /> */}

              <div className="flex flex-col md:flex-row gap-10 justify-center mt-6">
                <Link to="/regenterprise" className="block md:inline-block">
                  <button className="btn bg-[#2c4a9a]  md:text-2xl text-sm font-bold whitespace-nowrap text-white px-6 py-1">
                    Get Started
                  </button>
                </Link>
                <button className="btn bg-[#2c4a9a]  md:text-2xl text-sm font-bold whitespace-nowrap text-white px-6 py-1">
                  Go Individual Site
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="pt-10 pb-10">
              <img
                className="h-screen object-cover w-full md:h-screen"
                src={bg2}
                alt=""
                style={{ objectPosition: "10% 65%" }}
              />
            </p>
            <div className="absolute w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {/* <img className="w-32 mb-4 " src={logo} alt="" /> */}
              <div className="flex flex-col md:flex-row gap-10 justify-center mt-6">
                <Link to="/regenterprise" className="block md:inline-block">
                  <button className="btn bg-[#2c4a9a] md:text-2xl text-sm whitespace-nowrap font-bold text-white px-6 py-1">
                    Get Started
                  </button>
                </Link>
                <button className="btn bg-[#2c4a9a] md:text-2xl text-sm whitespace-nowrap font-bold text-white px-6 py-1">
                  Go Individual Site
                </button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="absolute top-0">
        <Nav type={"enterprice"} />
      </div>
    </div>
  );
};
export const SliderIndividual = () => {
  return (
    <div className="-mt-10">
      <div className="relative  h-screen">
        <Carousel
          transitionTime={0.1}
          infiniteLoop
          autoPlay={true}
          interval={1000}
          showIndicators={false}
        >
          <div>
            <p className="pt-10 pb-10">
              <img className=" h-screen" src={indu1} alt="" />
            </p>
            <div className="absolute w-1/2 top-[40%] left-[25%]">
              <img className="w-32" src={logo} alt="" />
              <div className="flex gap-10 justify-center mt-20">
                <Link to="/regindivudal">
                  <button className=" btn bg-[#2c4a9a] text-2xl font-bold text-white">
                    Get Started
                  </button>
                </Link>
                <button className=" btn bg-[#2c4a9a] text-2xl font-bold text-white">
                  Go Enterprise Site
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="pt-10 pb-10">
              <img className=" h-screen" src={indu3} alt="" />
            </p>
            <div className="absolute w-1/2 top-[40%] left-[25%]">
              <img className="w-32" src={logo} alt="" />
              <div className="flex gap-10 justify-center mt-20">
                <Link to="/regindivudal">
                  <button className=" btn bg-[#2c4a9a] text-2xl font-bold text-white">
                    Get Started
                  </button>
                </Link>
                <button className=" btn bg-[#2c4a9a] text-2xl font-bold text-white">
                  Go Enterprise Site
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="pt-10 pb-10">
              <img className=" h-screen" src={indu4} alt="" />
            </p>
            <div className="absolute w-1/2 top-[40%] left-[25%]">
              <img className="w-32" src={logo} alt="" />
              <div className="flex gap-10 justify-center mt-20">
                <Link to="/regindivudal">
                  <button className=" btn bg-[#2c4a9a] text-2xl font-bold text-white">
                    Get Started
                  </button>
                </Link>
                <button className=" btn bg-[#2c4a9a] text-2xl font-bold text-white">
                  Go Enterprise Site
                </button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="absolute top-0">
        <Nav type={"individual"} />
      </div>
    </div>
  );
};
