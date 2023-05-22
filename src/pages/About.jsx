import { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../style/style.css"
import HandshakeIcon from '@mui/icons-material/Handshake';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import Lottie from "lottie-web";
import demo from "../assets/about.json";
const About = () => {

  const container = useRef(null);
  let anim = null;

  useEffect(() => {
    anim = Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: demo,
    });

    return () => {
      anim.destroy();
    };
  }, []);
  return (
    <div>
      <div className="bg-[#808080] ">
        <Nav />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-32 pt-8 md:pt-24 pb-8 md:pb-24 justify-center items-center">
      <div ref={container} className="text-center  lg:text-left w-96 "></div>

      <div className="w-full md:w-2/5">
          <h2 className="md:text-4xl text-xl text-center md:text-block  md:text-5xl font-bold  md:ml-0 md:mr-0 ml-3 mr-2">
          What We Do?
          </h2>
          <p className="mt-4 md:mt-8 md:ml-0 md:mr-0 ml-5 mr-5 text-xs text-base md:text-xl">
  We are one and only maintenance solution for individuals and businesses to subscribe to a comprehensive maintenance plan. Our solution covers the complete maintenance of digital systems and properties. Our professional engineers are available to fix any issues at customer premises. With our subscription plan, you can be free from all maintenance issues for your home or office. Choose a plan that includes multiple services or customize it as per your needs.
</p>

        </div>
      </div>
      <div className="w-2/3 m-auto">
      <h2 className="md:text-5xl text-2xl ">We have two service models:</h2>
<div className="flex flex-wrap justify-between mt-10">
  <div className="card w-full sm:w-96 bg-primary text-primary-content mb-10 sm:mb-0">
    <div className="card-body">
      <h2 className="card-title">B to B</h2>
      <ul className="text-xl">
        <li>Housing Society</li>
        <li>Corporate Office</li>
        <li>Retail Center, Warehouse, Factory, Shopping Mall</li>
        <li>Hotels</li>
        <li>Hospital Resort</li>
        <li>Industry</li>
        <li>Govt.</li>
        <li>University</li>
      </ul>
    </div>
  </div>
  <div className="card w-full sm:w-96 bg-primary text-primary-content">
    <div className="card-body">
      <h2 className="card-title">B to C</h2>
      <ul className="text-xl">
        <li>Flat/Villa</li>
        <li>Office Shop/Showroom, Household, Guest House</li>
        <li>Clinic, Private Farm</li>
        <li>School</li>
      </ul>
    </div>
  </div>
</div>


        <div className="pt-20"><h2 className="md:text-5xl text-3xl pb-5 font-bold">Our Values</h2>

          <div className="card w-full sm:w-96 bg-primary text-primary-content">
            <div className="card-body ">
              <h2 className="card-title">Our Values
              </h2>
              <ul className="flex gap-5 text-xl items-center">
               <li className="text-2xl font-bold"><HandshakeIcon/></li>
                <li>Commitment</li>
              </ul>
              <ul className="flex gap-5 text-xl items-center">
               <li className="text-2xl font-bold"><VolunteerActivismIcon/></li>
                <li>Passionate</li>
              </ul>
              <ul className="flex gap-5 text-xl items-center">
               <li className="text-2xl font-bold"><QueryStatsIcon/></li>
                <li>Transparency</li>
              </ul>
              <ul className="flex gap-5 text-xl items-center">
               <li className="text-2xl font-bold"><AllInclusiveIcon/></li>
                <li>Consistency</li>
              </ul>
              <ul className="flex gap-5 text-xl items-center">
               <li className="text-2xl font-bold"><StackedLineChartIcon/></li>
                <li>Efficiency</li>
              </ul>
            
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
