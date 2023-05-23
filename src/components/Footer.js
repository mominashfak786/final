import facebook from "../assets/oterhs/icons8-facebook-24.png";
import instagram from "../assets/oterhs/icons8-instagram-50.png";
import linkedin from "../assets/oterhs/icons8-linkedin-30.png";
import twitter from "../assets/oterhs/icons8-twitter-30.png";
import Logo from "../assets/oterhs/logo (1).png";
import "../style/style.css";
import { useState } from "react";
import { sales } from "../functions/SalesContact";
import { Link } from "react-router-dom";
const Footer = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedPackagePrice, setSelectedPackagePrice] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleRegionSelection = (e) => {
    const selectregion = e.target.value;

    setSelectedRegion(selectregion);
    setSelectedCountry("");
    setSelectedPackagePrice("");
  };
  const handleCountrySelection = (e) => {
    const country = e.target.value;
    console.log(country);
    setSelectedCountry(country);
    setSelectedPackagePrice(sales[selectedRegion][country]);
  };
  return (
    <>
      <footer className="bg-white md:mt-0 mt-6 md:ml-12 px-6 ml-4">
        <div className="grid grid-cols-1 md:ml-20 ml-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 py-8 px-4">
          <Link to="/aboutus">
            <a className="footer-link">About Us</a>
          </Link>
          <a className="footer-link" id="corporate-footer" href="#">
            <label htmlFor="my-modal" className="">
              Corporate Office
            </label>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <select
                  value={selectedOption}
                  onChange={handleOptionChange}
                  name=""
                  id=""
                  className="mb-4 p-2 rounded border border-gray-300 focus:outline-none"
                >
                  <option value="">Select A Region</option>
                  <option value="asia">Asia</option>
                  <option value="europe">Europe</option>
                  <option value="northamerica">North America</option>
                </select>
                {selectedOption === "asia" && (
                  <div className="mt-5">
                    Street: 10, Hermes Centre, Sector 17, Vashi, Navi Mumbai
                    City: Mumbai State: Maharashtra Phone Number: 02227890390
                    Country: India
                  </div>
                )}
                {selectedOption === "europe" && <div className="mt-5"></div>}
                {selectedOption === "northamerica" && (
                  <div className="mt-5"></div>
                )}
                <div className="modal-action">
                  <label htmlFor="my-modal" className="btn">
                    Got It
                  </label>
                </div>
              </div>
            </div>
          </a>
          <a className="footer-link" id="sales-contact-up" href="#!">
            <label htmlFor="my-modal-6" className="">
              Sales Contact
            </label>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <span>Select Region</span>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <select
                    required
                    onClick={(e) => handleRegionSelection(e)}
                    name="country"
                    className="focus:outline-none w-full bg-transparent"
                    id=""
                  >
                    {Object.keys(sales).map((region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="country">Country*</label>
                  <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    {selectedRegion && (
                      <>
                        <select
                          className="focus:outline-none w-full bg-transparent"
                          onClick={(e) => handleCountrySelection(e)}
                        >
                          {Object.keys(sales[selectedRegion]).map((country) => (
                            <option key={country} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                      </>
                    )}
                  </div>
                  <p className="mt-5">{selectedPackagePrice}</p>
                </div>
                <div className="modal-action">
                  <label htmlFor="my-modal-6" className="btn">
                    Yay!
                  </label>
                </div>
              </div>
            </div>
          </a>
          <Link to="/management">
            <a className="footer-link">Management</a>
          </Link>
          <Link to="/priceing">
            <a className="footer-link">Packages Globally</a>
          </Link>
          <a className="footer-link" href="#">
            <label htmlFor="my-modal-5" className="">
              User Login
            </label>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg">Channel Partner Dashboard</h3>
                <h3 className="font-bold text-lg">Enterprise Dashboard</h3>
                <h3 className="font-bold text-lg">Individual Dashboard</h3>
                <div className="modal-action">
                  <label htmlFor="my-modal-5" className="btn">
                    Yay!
                  </label>
                </div>
              </div>
            </div>
          </a>
          <Link to="/contact">
            <a className="footer-link">Contact Us</a>
          </Link>
          <Link to="/channelpartner">
            <a className="footer-link">Channel Partner</a>
          </Link>
          <Link to="/trames">
            <a className="footer-link">Terms & Conditions</a>
          </Link>
          <Link to="/privacy">
            <a className="footer-link">Privacy Policy</a>
          </Link>
          <Link to="/cancellation">
            <a className="footer-link">Cancellation & Refund Policy</a>
          </Link>
          <Link to="/shipping">
            <a className="footer-link">Shipping & Delivery</a>
          </Link>
        </div>
        <div className=" text-3xl text-gray-900 text-center font-bold">
          Operational In
        </div>
        <div className="flex flex-col items-center justify-center md:px-6">
          <div className=" py-8 px-4 gap-1">
            <div className="footer-title text-xl text-gray-900">Asia</div>
            <div className="footer-content flex flex-wrap">
              <p className="w-1/2 sm:w-auto md:mr-5">India</p>
              <p className="w-1/2 sm:w-auto md:mr-5">Singapore</p>
              <p className="w-1/2 sm:w-auto md:mr-5">Thailand</p>
              <p className="w-1/2 sm:w-auto md:mr-5">Turkey</p>
              <p className="w-1/2 sm:w-auto md:mr-5">Hong Kong</p>
              <p className="w-1/2 sm:w-auto md:mr-5">UAE</p>
            </div>

            <div className="mt-3">
              <div className="footer-title text-xl text-gray-900">Europe</div>
              <div className="flex flex-wrap">
                <p className="md:mr-5 w-1/2 sm:w-auto">United Kingdom</p>
                <p className="md:mr-5 w-1/2 sm:w-auto">Ireland</p>
                <p className="md:mr-5 w-1/2 sm:w-auto">Netherlands</p>
                <p className="md:mr-5 w-1/2 sm:w-auto">Italy</p>
                <p className="md:mr-5 w-1/2 sm:w-auto">Hungary</p>
                <p className="md:mr-5 w-1/2 sm:w-auto">Switzerland</p>
                <p className="md:mr-5 w-1/2 sm:w-auto">Germany</p>
                <p className="md:mr-5 w-1/2 sm:w-auto">Poland</p>
                <p className="md:mr-5 w-1/2 sm:w-auto">Sweden</p>
                <p className="md:mr-5 w-1/2 sm:w-auto">Denmark</p>
                <p className="md:mr-5 w-1/2 sm:w-auto">Belgium</p>
                <p className="md:mr-5 w-1/2 sm:w-auto">France</p>
                <p className="md:mr-5 w-1/2 sm:w-auto">Spain</p>
                <p className="md:mr-5 w-1/2 sm:w-auto">Portugal</p>
              </div>
            </div>

            <div className="mt-3">
              <div className="footer-title text-xl text-gray-900">
                North America
              </div>
              <div className="flex flex-wrap">
                <p className="md:mr-5 mr-5">Canada</p>
                <p className="md:mr-5  mr-5">United States of America</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <hr />
      <div className="flex flex-col px-8 justify-center items-center sm:flex-row sm:justify-between sm:items-center">
  <div className="logo-footer mb-4">
    <img src={Logo} alt="Company Logo" />
    <div className="text-sm items-center">
      <p>©2023 All rights reserved. LetUsMaintain</p>
    </div>
  </div>
  <div className="flex pb-4">
    <a
      className="mr-2 sm:mr-0 sm:mb-0"
      href="https://www.facebook.com/profile.php?id=100092328792629"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={facebook}
        alt="Facebook"
        className="w-5 h-5 sm:w-8 sm:h-8"
      />
    </a>
    <a
      className="mr-2 sm:mr-0 sm:mb-0"
      href="https://instagram.com/letusmaintain?igshid=NTc4MTIwNjQ2YQ=="
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={instagram}
        alt="Instagram"
        className="w-5 h-5 sm:w-8 sm:h-8"
      />
    </a>
    <a
      className="mr-2 sm:mr-0 sm:mb-0"
      href="https://twitter.com/letusmaintain?s=21&t=ITFELYxk4Sjk4PwhNSI7WQ"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={twitter}
        alt="Twitter"
        className="w-5 h-5 sm:w-8 sm:h-8"
      />
    </a>
    <a
      href="https://www.linkedin.com/showcase/letusmaintain-com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={linkedin}
        alt="LinkedIn"
        className="w-5 h-5 sm:w-8 sm:h-8"
      />
    </a>
  </div>
</div>

    </>
  );
};

export default Footer;
