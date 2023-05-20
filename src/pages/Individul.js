import { useEffect, useState } from "react";
import "../style/style.css";

import aboutus from "../assets/oterhs/construccion.jpg";
import Electrical from "../assets/services/electrical.jpg";
import servicehover from "../assets/oterhs/logo-item.png";
import carpenter from "../assets/services/carpenter.jpg";
import cleaner from "../assets/services/cleaner.jpg";
import garderning from "../assets/services/garderning.jpg";
import plumbing from "../assets/services/plumbing.jpg";
import system from "../assets/services/system.jpg";
import permises from "../assets/oterhs/pexels-life-of-pix-8092.jpg";
import { handaleservice } from "../functions/Servicemodal";
import mantenimiento from "../assets/oterhs/feature-mantenimiento.png";
import clarity from "../assets/oterhs/features-clarity.png";
import customer from "../assets/oterhs/features-custumer.png";
import services from "../assets/oterhs/features-100services.png";

import user from "../assets/oterhs/feature-user.png";
import clock from "../assets/oterhs/feature-24hours.png";
import qualified from "../assets/oterhs/icons8-aprobación-80.png";
import services2 from "../assets/oterhs/icons8-servicio-50.png";
import support from "../assets/oterhs/icons8-auriculares-50.png";

import click from "../assets/oterhs/feature-clickk.png";
import login from "../assets/oterhs/feature-loginn.png";
import year from "../assets/oterhs/feature-year.png";

import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { useSpring, animated } from "react-spring";
import { SliderEnterprise, SliderIndividual } from "../components/Slider";
import { ServicesSliderEnterprice } from "../components/Subscribe";
import Footer from "../components/Footer";
import Induvidualvisits from "../components/Induvidualvisits";
import useTitle from "../hooks/usetitle";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const Individul = () => {
  useTitle("Individual");
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <SliderIndividual />
      <div
        id="about"
        class="sm:flex sm:flex-col md:flex-row  md:flex lg:flex lg:flex-row gap-10 justify-between w-2/3 m-auto pt-20 "
      >
        <div class="etiqueta-item">
          <p class="etiquetas-info"> 2019</p>
          <p class="etiquetas-titulo">Founded</p>
        </div>
        <div class="etiqueta-item">
          <div className="flex items-center justify-center">
            <p class="etiquetas-info">
              {" "}
              <Number n={1200} />
            </p>
            <p className="text-6xl text-[#2c4a9a]">+</p>
          </div>
          <p class="etiquetas-titulo">Clients</p>
        </div>
        <div class="etiqueta-item">
          <div className="flex items-center justify-center">
            <p class="etiquetas-info">
              <Number n={400} />
            </p>
            <p className="text-6xl text-[#2c4a9a]">+</p>
          </div>
          <p class="etiquetas-titulo">Team Size</p>
        </div>
        <div class="etiqueta-item">
          <p class="etiquetas-info">Worldwide</p>
          <p class="etiquetas-titulo">Locations</p>
        </div>
      </div>

     
      <div className="flex flex-col md:flex-row gap-4 md:gap-32 pt-8 md:pt-24 pb-8 md:pb-24 justify-center items-center">
        <img
          data-aos="fade-left"
          className="w-3/4 md:w-1/4"
          src={aboutus}
          alt=""
        />
        <div data-aos="fade-right" className="w-full md:w-2/5">
          <h2 className="md:text-4xl text-xl  md:text-5xl font-bold  md:ml-0 md:mr-0 ml-3 mr-2">
            What is LetUsMaintain.com?
          </h2>
          <p className="mt-4 md:mt-8 md:ml-0 md:mr-0 ml-5 mr-5">
            We are the one & only Facility Management Solution Company for both
            individuals & businesses to subscribe to our solution to cover your
            complete maintenance of digital systems & property under service
            maintenance solution that includes all kinds of fixing at client
            premises by our professionally trained engineers & technicians. And
            to make the client free mind for their private/commercial premises
            maintenance by activating the subscription for multiple services in
            one plan.
          </p>
          <Link to="aboutus">
            <button className="btn mt-4 md:mt-8 md:ml-0 ml-6">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <section id="services" class="services-section">
        <h2 class="service-h2">Services</h2>

        <section class="services">
          <div
            data-aos="zoom-out-right"
            onClick={() => handaleservice(1)}
            class="service-item service1"
          >
            <div class="img">
              <img class="img-item" src={Electrical} alt="" />
              <div class="hover-item">
                <p class="item-number">1</p>
                <img src={servicehover} alt="logo-M" />
                <h2>Electrical & Electronics Maintenance</h2>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-out-right"
            onClick={() => handaleservice(2)}
            class="service-item service2"
          >
            <div class="img">
              <img class="img-item" src={plumbing} alt="" />
              <div class="hover-item">
                <p class="item-number">2</p>
                <img src={servicehover} alt="logo-M" />
                <h2>Plumbing Maintenance</h2>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-out-right"
            onClick={() => handaleservice(3)}
            class="service-item service4"
          >
            <div class="img">
              <img class="img-item" src={system} alt="" />
              <div class="hover-item">
                <p class="item-number">3</p>
                <img src={servicehover} alt="logo-M" />
                <h2>Computer System Maintenance</h2>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-out-right"
            onClick={() => handaleservice(4)}
            class="service-item service5"
          >
            <div class="img">
              <img class="img-item" src={carpenter} alt="" />
              <div class="hover-item">
                <p class="item-number">4</p>
                <img src={servicehover} alt="logo-M" />
                <h2>Carpenter Services</h2>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-out-right"
            onClick={() => handaleservice(5)}
            class="service-item service6"
          >
            <div class="img">
              <img class="img-item" src={cleaner} alt="" />
              <div class="hover-item">
                <p class="item-number">5</p>
                <img src={servicehover} alt="logo-M" />
                <h2>Housekeeping Services (Cleaning Services)</h2>
              </div>
            </div>
          </div>

          <div
            data-aos="zoom-out-right"
            onClick={() => handaleservice(7)}
            class="service-item service7"
          >
            <div class="img">
              <img class="img-item" src={permises} alt="" />
              <div class="hover-item">
                <p class="item-number">6</p>
                <img src={servicehover} alt="logo-M" />
                <h2>Premises Review</h2>
              </div>
            </div>
          </div>
        </section>
      </section>

      <div class="container-features">
        <div class="title-features">
          <h2>FEATURES</h2>
          <hr />
        </div>

        <ul class="features">
          <li class="item-features">
            <div class="cell  features-left">
              <img class="img-valor test" src={mantenimiento} alt="logo" />
            </div>
            <div class="cell">
              <p class="text pre-line">
                Package Includes Service cost, fixing, repairing, as per
                services if any need of parts and any new kind of hardware that
                will be provided by user itself or it can be purchased by them
                on nominal discount from our partner stores.
              </p>
            </div>
          </li>
          <li class="item-features">
            <div class="cell">
              <p class="text pre-line">
                Our technician is just a click away from your premises whenever
                you need support just think about one brand Letusmaintain.com
              </p>
            </div>
            <div class="cell features-right">
              <img class="img-valor" src={click} alt="logo" />
            </div>
          </li>
          <li class="item-features">
            <div class="cell features-left">
              <img class="img-valor test" src={user} alt="logo" />
            </div>
            <div class="cell">
              <p class="text pre-line">
                Once subscribed the package then just verify your details via
                mail, and register into subscriber login with your username &
                password provided at the time of subscribing the plan on your
                provided email address
              </p>
            </div>
          </li>
          <li class="item-features">
            <div class="cell">
              <p class="text pre-line">
                To file the service complaint just use your dashboard login
              </p>
            </div>
            <div class="cell features-right">
              <img class="img-valor" src={login} alt="logo" />
            </div>
          </li>
          <li class="item-features">
            <div class="cell features-left">
              <img class="img-valor test" src={clock} alt="logo" />
            </div>
            <div class="cell">
              <p class="text pre-line">
                The service engineer will be at your doorstep within 2 to 3
                hours after filling the request or as per your convenience
              </p>
            </div>
          </li>
          <li class="item-features">
            <div class="cell">
              <p class="text pre-line">
                Plan valid for one year from the date of subscription
              </p>
            </div>
            <div class="cell features-right">
              <img class="img-valor" src={year} alt="logo" />
            </div>
          </li>
        </ul>
      </div>

      <Induvidualvisits />
      <ServicesSliderEnterprice />

      <section class="us mt-6 md:mb-0 mb-20">
        <div class="choose-us">
          <h2>Why Choose Us?</h2>
          <div class="flex flex-wrap justify-between">
            <div class="w-full sm:w-auto mb-6 sm:mb-0">
              <img class="mx-auto" src={qualified} alt="Icon 1" />
              <h3>Qualified Personnel</h3>
              <p>
                We have qualified professionals for all the services we provide.
                Quality service is our pride.
              </p>
            </div>
            <div class="w-full sm:w-auto mb-6 sm:mb-0">
              <img class="mx-auto" src={services2} alt="Icon 2" />
              <h3>Impeccable Service</h3>
              <p>Our services are world-class and we ensure timely delivery.</p>
            </div>
            <div class="w-full sm:w-auto">
              <img class="mx-auto" src={support} alt="Icon 3" />
              <div>
                <h3>24/7 Customer Service</h3>
                <p>Our clients can reach us at any moment, day or night.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Individul;
