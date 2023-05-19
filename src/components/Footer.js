import facebook from "../assets/oterhs/icons8-facebook-24.png";
import instagram from "../assets/oterhs/icons8-instagram-50.png";
import linkedin from "../assets/oterhs/icons8-linkedin-30.png";
import twitter from "../assets/oterhs/icons8-twitter-30.png";
import Logo from "../assets/oterhs/logo (1).png"
import "../style/style.css"
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
        <footer className="bg-white">
        <div class="footer-links">
        <Link to="/aboutus">
          <a class="footer-link" >
            About Us
          </a>
          </Link>

          <a class="footer-link" id="corporate-footer" href="#">
            {/* The button to open modal */}
            <label htmlFor="my-modal" className="">
              Corporate Office
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <select
                  value={selectedOption}
                  onChange={handleOptionChange}
                  name=""
                  id=""
                >
                  <option value="">Select A Region</option>
                  <option value="asia">Asia</option>
                  <option value="europe">Europe</option>
                  <option value="northamerica">North America</option>
                </select>
                <div>
                  {selectedOption === "asia" && (
                    <div className="mt-5">
                      Street: 10, Hermes Centre, Sector 17, Vashi, Navi Mumbai
                      City: Mumbai State: Maharashtra Phone Number: 02227890390
                      Country: India
                    </div>
                  )}
                  {selectedOption === "europe" && (
                    <div className="mt-5">
                    
                    </div>
                  )}
                  {selectedOption === "northamerica" && (
                    <div className="mt-5">
                     
                    </div>
                  )}
                </div>
                <div className="modal-action">
                  <label htmlFor="my-modal" className="btn">
                    Got It
                  </label>
                </div>
              </div>
            </div>
          </a>
          <a class="footer-link" id="sales-contact-up" href="#">
            <label htmlFor="my-modal-6" className="">
            Sales Contact
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <span>Select Region</span>
                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
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
                <div class="md:col-span-2">
                  <label for="country">Country*</label>
                  <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
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
          <Link to="/management"><a class="footer-link" >
            Management
          </a></Link>
          <Link to="/priceing"><a class="footer-link" >
            Packages Globally
          </a></Link>


          <a  class="footer-link" href="#">
           {/* The button to open modal */}
           <label htmlFor="my-modal-5" className="">User Login</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">Channel Partner Dashboard</h3>
    <h3 className="font-bold text-lg">Enterprise Dashboard </h3>
    <h3 className="font-bold text-lg">Individual Dashboard</h3>
    
    <div className="modal-action">
      <label htmlFor="my-modal-5" className="btn">Yay!</label>
    </div>
  </div>
</div>

          </a>
          <Link to="/contact">
         <a class="footer-link" >
            Contact Us
          </a>
         </Link>

          <Link to="/channelpartner"><a class="footer-link" >
            Channel Partner
          </a></Link>  <br />

          <Link to="/trames"><a class="footer-link" >
            Terms & Conditions
          </a></Link>
          <Link to="/privacy">
          <a class="footer-link">
            Privacy Policy
          </a>
          </Link>
          <Link to="/cancellation">
          
          <a class="footer-link" >
           Cancellation & Refund Policy
          </a>
          </Link>
          <Link to="/shipping">
          
          <a class="footer-link" >
          Shipping & Delivery
          </a>
          </Link>
         
         
       
         
        
         
         
        </div>
        


        <div class="footer-grid">
          <div class="footer1"> Operational In </div>
          <div class="footer2"> Asia </div>
          <div class="footer3"> Europe </div>
          <div class="footer4"> North America </div>
          <div class="footer5">
            <p className="mr-5">India</p>
            <p  className="mr-5">Singapore</p>
            <p  className="mr-5">Thailand</p>
            <p  className="mr-5">Turkey</p>
            <p  className="mr-5"> Hong Kong</p>
            <p  className="mr-5">and UAE</p>
          </div>
          <div class="footer6">
            <p  className="mr-5">United Kingdom</p>
            <p  className="mr-5"> Ireland</p>
            <p  className="mr-5"> Netherlands</p>
            <p  className="mr-5"> Italy</p>
            <p  className="mr-5"> Hungary</p>
            <p  className="mr-5"> Switzerland</p>
            <p  className="mr-5"> Germany</p>
            <p  className="mr-5"> Poland</p>
            <p  className="mr-5"> Sweden</p>
            <p  className="mr-5"> Denmark</p>
            <p  className="mr-5"> Belgium</p>
            <p  className="mr-5"> France</p>
            <p  className="mr-5"> Spain</p>
            <p  className="mr-5"> and Portugal</p>
          </div>
          <div class="footer7">
            <p  className="mr-5">Canada</p>
            <p  className="mr-5"> and United States of America</p>
          </div>
        </div>
        <hr class="hr-footer" />

        <div class="logo-footer">
          <img src={Logo} alt="Company Logo" />
          <p>Copyright: All rights reserved ©2023</p>
          <div class="links-footer">
            <a
              class="footer-link"
              href="https://www.facebook.com/profile.php?id=100092328792629"
              target="_blank"
            >
              <img src={facebook} alt="facebook" />
            </a>
            <a
              class="footer-link"
              href="https://instagram.com/letusmaintain?igshid=NTc4MTIwNjQ2YQ=="
              target="_blank"
            >
              <img src={instagram} alt="instragram" />
            </a>
            <a
              class="footer-link"
              href="https://twitter.com/letusmaintain?s=21&t=ITFELYxk4Sjk4PwhNSI7WQ"
              target="_blank"
            >
              <img src={twitter} alt="twitter" />
            </a>
            <a
              class="footer-link"
              href="https://www.linkedin.com/showcase/letusmaintain-com/"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
      </footer>
    );
};

export default Footer;