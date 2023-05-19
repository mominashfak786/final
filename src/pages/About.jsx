import { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
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
      <div className="bg-[#808080] pl-20 pr-20">
        <Nav />
      </div>
      <div className="w-2/3 m-auto flex justify-between items-center aboutcontainer mt-20">
        <div className="w-1/2">
          <h2 className="text-5xl font-bold">What We Do?</h2>
          <p className="mt-5">
            We are one and only maintenance solution for individual and
            businesses to subscribe one and only solution to cover your complete
            maintenance of digital systems and property under service
            maintenance solution that includes any kind of fixing at customer
            premises by one of the companie's professional engineers at client
            premises. And be free from all maintenance issues for their
            home/office maintenance by using a plan subscription for multiple
            services in one single plan or as per service.
          </p>
        </div>
        <div ref={container} className="text-center  lg:text-left w-96 "></div>
      </div>
      <div className="w-2/3 m-auto">
        <h2 className="text-5xl font-bold"> We have two service models:</h2>
        <div className="flex justify-between mt-20">
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">B to B</h2>
              <ul>
                <li>Housing Society </li>
                <li>Corporate Office</li>
                <li>Retail, Center, Warehouse, Factory, Shopping Mall </li>
                <li>Hotels</li>
                <li>Hospital Resort</li>
                <li>Industry</li>
                <li>Govt.</li>
                <li>University</li>
              </ul>

            </div>
          </div>
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">B to C</h2>
              <ul>
                <li>
                  Flat/Villa

                </li>
                <li>
                  Office Shop/Showroom, Household, Guest House

                </li>
                <li>
                  Clinic, Private Farm

                </li>
                <li>School</li>
              </ul>

            </div>
          </div>

        </div>

        <div className="pt-20"><h2 className="text-5xl pb-5 font-bold">Our Values</h2>

          <div className="card  w-96 bg-primary text-primary-content">
            <div className="card-body">
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
