import axios from "axios";
import React, { useEffect, useState } from "react";
import "../components/custom.css"

import PhoneInput from "react-phone-input-2";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "react-phone-input-2/lib/style.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import logo  from "../assets/oterhs/logo (1).png"
import Loading from "../components/Loading";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
const ClientReg = () => {
  const [fullpackage, setFullpackage] = useState(false);
  const [asperservice, setasperservice] = useState(false);
  const [data, setData] = useState([]);
  const [getstate, setstate] = useState([]);
  const [city, setcity] = useState([]);
  const [phone, setPhone] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [standed, setstanded] = useState("");
  const [selectedButton, setSelectedButton] = useState(null);
  const [visitorpack, setvisitorpack] = useState("");
  const [captcha, setcaptcha] = useState(true)
  const [captchaerror, setCaptchaerror] = useState("")
  const [loading ,setLoading] = useState(false) 

  useEffect(() => {
    AOS.init({
      duration:1000
    })
      },[])
  const onChange = () => {
    setcaptcha(true)
    setCaptchaerror("")
      };

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;

    if (event.target.checked) {
      setvisitorpack([...visitorpack, checkboxValue]);
    } else {
      setvisitorpack(visitorpack.filter((value) => value !== checkboxValue));
    }
  };

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    setstanded(button);
  };
  const handaleslution = (e) => {
    const getpackage = e.target.value;
    if (getpackage === "fullpackage") {
      setFullpackage(true);
      setasperservice(false);
    }
    if (getpackage === "asperservice") {
      setFullpackage(false);
      setasperservice(true);
    }
  };

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    axios
      .get(
        "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
      )
      .then((res) => setData(res.data));
  }, []);
  const country = [...new Set(data.map((item) => item.country))];
  country.sort();

  const handalecountry = (e) => {
    let states = data.filter((states) => states.country === e.target.value);
    states = [...new Set(states.map((item) => item.subcountry))];
    states.sort();
    setstate(states);
  };
  const handalestate = (e) => {
    let cityes = data.filter((item) => item.subcountry === e.target.value);
    cityes.sort();
    setcity(cityes);
  };

  const handleOnChange = (value) => {
    setPhone(value);
  };

//form submit 
  const handalesubmit = (e) => {
    e.preventDefault();
    const email = e.target.getmail.value;
    const pass = e.target.password.value;
    const date = e.target.date.value;


    setLoading(true)
    const formData = {
      email: email,
      pass: pass,
      Package: standed,
      visits: visitorpack,
      date: date,
    };
    fetch("http://localhost:5000/subscription", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        Swal.fire("Application Received", "Stay With Us ", "success");
        e.target.reset();
      });

   
  };
  return (
   <div>
     <div className=" clientreg">
    <div className="pr-20">
    <Nav/>
    </div>
      <div className=" lg:w-8/12 m-auto">
      <div className ="min-h-screen  flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto mt-14">
          <div>
            <div className="flex justify-between items-center">
              <div className="">
                <h2 className="font-bold  text-3xl text-[#fff]">
                  Please Fill in the below details{" "}
                </h2>
              </div>
              
            </div>

            <div className="bg-[#fff]  rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid  gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <form data-aos="fade-left" onSubmit={handalesubmit} className="lg:col-span-3">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1">
                  <div className="md:col-span-6 mt-4">
                      <label for="full_name">Full Name*</label>
                      <input
                        required
                        placeholder="Jhone Die"
                        type="text"
                        name="full_name"
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>

                    <div className="md:col-span-6 mt-4">
                      <label>Email Address*</label>
                      <input
                        required
                        type="text"
                        name="getmail"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="email@domain.com"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label for="country">SET YOUR PASSWORD* </label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          required
                          className="h-10  mt-1 rounded px-4 w-full bg-gray-50"
                          name="password"
                          type={passwordShown ? "text" : "password"}
                        />
                        <span onClick={togglePassword}>
                          {passwordShown ? (
                            <VisibilityIcon />
                          ) : (
                            <>
                              {" "}
                              <VisibilityOffIcon />
                            </>
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <label for="country">SELECT COUNTRY *</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <select
                          required
                          onChange={(e) => handalecountry(e)}
                          name="country"
                          className="focus:outline-none w-full bg-transparent"
                          id=""
                        >
                          {country.map((items) => (
                            <option value={items} key={items}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                   

                    
                   
                    <div className="md:col-span-3 mt-2">
                      <label for="country">STATE*</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <select
                          required
                          onChange={(e) => handalestate(e)}
                          name="state"
                          className="focus:outline-none w-full bg-transparent"
                          id=""
                        >
                          <option>STATE</option>
                          {getstate.map((items) => (
                            <option value={items} key={items}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="md:col-span-3 mt-2">
                      <label for="country">CITY*</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <select
                          required
                          name="city"
                          className="focus:outline-none w-full bg-transparent"
                          id=""
                        >
                          <option value=""> CITY*</option>
                          {city?.map((item) => (
                            <option key={item} value={item}>{item.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="md:col-span-3 mt-5">
                      <label for="country">LANDMARK</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          type="text"
                          name="Landmark"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Landmark"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-3 mt-5">
                      <label for="country">ZIP CODE</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          type="number"
                          name="Landmark"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Zip"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2 mt-5">
                      <label for="country">PROPERTY NO</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          type="text"
                          name="Propertyno"
                          id="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Property"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2 mt-5">
                      <label for="country">STREET NAME</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          type="text"
                          name="StreetName"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Street "
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2 mt-5">
                      <label for="country">BUSINESS NAME*</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          required
                          type="text"
                          name="StreetName"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Street "
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2 mt-5">
                      <label for="country">CATEGORY TYPE*</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <select
                          required
                          name=""
                          className="focus:outline-none w-full bg-transparent"
                          id=""
                        >
                          <option value="HousingSociety">
                            Housing Society{" "}
                          </option>
                          <option value="HousingSociety">
                            Corporate Office{" "}
                          </option>
                          <option value="HousingSociety">Retail Center </option>
                          <option value="HousingSociety">Warehouse </option>
                          <option value="HousingSociety">Factory </option>
                          <option value="HousingSociety">Shopping Mall </option>
                          <option value="HousingSociety">Hotels </option>
                          <option value="HousingSociety">Hospital </option>
                          <option value="HousingSociety">Resort </option>
                          <option value="HousingSociety">Industry </option>
                          <option value="HousingSociety">Government </option>
                          <option value="HousingSociety">University </option>
                          <option value="HousingSociety">Others </option>
                        </select>
                      </div>
                    </div>

                    <div className="md:col-span-2 mt-5">
                      <label for="country">Provide Date of Activation*</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          required
                          type="date"
                          name="date"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Street "
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2 mt-5">
                      <label for="country">Select Solution * </label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <select
                          required
                          onChange={(e) => handaleslution(e)}
                          name="Experienced"
                          className="focus:outline-none w-full bg-transparent"
                          id=""
                        >
                          <option value=""> Select </option>
                          <option value="fullpackage"> Full Package </option>
                          <option value="asperservice">
                            {" "}
                            As per Services{" "}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="md:col-span-2 mt-5">
                     <label for="country">PHONE NUMBER </label>
                     <div class="h-9 flex border  items-center mt-1">
                       <PhoneInput
                       inputStyle={{ border: 'none', background: 'transparent' }}
                         required
                         value={phone}
                         onChange={handleOnChange}
                         country={"us"}
                       />
                     </div>
                   </div>
                    <div className="md:col-span-4  mt-5">
                      <label for="country"> Timings Schedule* </label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          className="ml-5"
                          type="Checkbox"
                          name="blue"
                          value="yes"
                          Checked
                        />
                        <span className="ml-2"> 09:00 am to 6:00 pm</span>
                        <input
                          type="Checkbox"
                          className="ml-5"
                          name="red"
                          value="yes"
                        />
                        <span className="ml-2"> 06:00 pm to 02:00 am</span>
                        <input
                          type="Checkbox"
                          className="ml-5"
                          name="green"
                          value="yes"
                        />
                        <span className="ml-2">02:00 am to 10:00 am</span>
                      </div>
                    </div>
                  </div>

                  {fullpackage && (
                    <div className="main mt-5">
                      <table className="price-table">
                        <tbody>
                          <tr>
                            <td className="price-blank"></td>
                            <td className="price-blank"></td>
                            <td className="price-blank"></td>
                          </tr>
                          <tr className="price-table-head">
                            <td>Category of Services</td>
                            <td>
                              Package Standard
                              <br />
                            </td>
                            <td>
                              Package Growth
                              <br />
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <a
                                href="#wordpress-asset-updates"
                                className="price-table-help"
                              ></a>{" "}
                              Electrical & Electronics Maintenance{" "}
                            </td>
                            <td>120</td>
                            <td>240</td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                href="#wordpress-core-updates"
                                className="price-table-help"
                              ></a>{" "}
                              Plumbing Maintenance
                            </td>
                            <td>120</td>
                            <td>240</td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                href="#wordpress-security-monitoring"
                                className="price-table-help"
                              ></a>{" "}
                              Computer System Maintenance (Hardware & Software)
                            </td>
                            <td>120</td>
                            <td>240</td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                href="#wordpress-uptime-monitoring"
                                className="price-table-help"
                              ></a>{" "}
                              Carpenter Services
                            </td>
                            <td>120</td>
                            <td>240</td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                href="#wordpress-malware-cleanup"
                                className="price-table-help"
                              ></a>{" "}
                              Housekeeping Services (Cleaning Services)
                            </td>
                            <td>120</td>
                            <td>240</td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                href="#wordpress-security-audit"
                                className="price-table-help"
                              ></a>{" "}
                              Gardening Services
                            </td>
                            <td>120</td>
                            <td>240</td>
                          </tr>

                          <tr>
                            <td></td>
                            <td className="price">
                              <span
                                className={`flex-1 border-2 p-2 btn btn-wide ${
                                  selectedButton === "Package Standard"
                                    ? "bg-[#5336ca]"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleButtonClick("Package Standard")
                                }
                              >
                                Select
                              </span>
                            </td>
                            <td className="price">
                              <span
                                className={`flex-1 border-2 btn btn-wide p-2 ${
                                  selectedButton === "Package Growth"
                                    ? "bg-[#5336ca]"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleButtonClick("Package Growth")
                                }
                              >
                                Select
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                  {asperservice && (
                    <div className="mt-5 overflow-x-auto w-full">
                      <table className="table w-full">
                        {/* head */}
                        <thead>
                          <tr>
                            <th>
                              <label>
                                <input
                                  onChange={handleCheckboxChange}
                                  type="checkbox"
                                  className="checkbox"
                                />
                              </label>
                            </th>
                            <th> Category of Services </th>

                            <th>Number Of Visits </th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* row 1 */}
                          <tr>
                            <th>
                              <label>
                                <input
                                  onChange={handleCheckboxChange}
                                  value="Electrical & Electronics Maintenance"
                                  type="checkbox"
                                  className="checkbox"
                                />
                              </label>
                            </th>
                            <td>
                              <div className="flex items-center space-x-3">
                                <div>
                                  <div className="font-bold">
                                    Electrical & Electronics Maintenance
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>90</td>
                          </tr>
                          {/* row 2 */}
                          <tr>
                            <th>
                              <label>
                                <input
                                  onChange={handleCheckboxChange}
                                  value="Plumbing Maintenance"
                                  type="checkbox"
                                  className="checkbox"
                                />
                              </label>
                            </th>
                            <td>
                              <div className="flex items-center space-x-3">
                                <div>
                                  <div className="font-bold">
                                    Plumbing Maintenance
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>90</td>
                          </tr>
                          {/* row 3 */}
                          <tr>
                            <th>
                              <label>
                                <input
                                  onChange={handleCheckboxChange}
                                  type="checkbox"
                                  value="Computer System Maintenance (Hardware &
                                    Software)"
                                  className="checkbox"
                                />
                              </label>
                            </th>
                            <td>
                              <div className="flex items-center space-x-3">
                                <div>
                                  <div className="font-bold">
                                    Computer System Maintenance (Hardware &
                                    Software)
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>90</td>
                          </tr>
                          {/* row 4 */}
                          <tr>
                            <th>
                              <label>
                                <input
                                  onChange={handleCheckboxChange}
                                  value="Carpenter Services"
                                  type="checkbox"
                                  className="checkbox"
                                />
                              </label>
                            </th>
                            <td>
                              <div className="flex items-center space-x-3">
                                <div>
                                  <div className="font-bold">
                                    Carpenter Services
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>90</td>
                          </tr>
                          <tr>
                            <th>
                              <label>
                                <input
                                  onChange={handleCheckboxChange}
                                  value="Housekeeping Services (Cleaning Services)"
                                  type="checkbox"
                                  className="checkbox"
                                />
                              </label>
                            </th>
                            <td>
                              <div className="flex items-center space-x-3">
                                <div>
                                  <div className="font-bold">
                                    Housekeeping Services (Cleaning Services){" "}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>120</td>
                          </tr>
                          <tr>
                            <th>
                              <label>
                                <input
                                  onChange={handleCheckboxChange}
                                  value="Gardening Services"
                                  type="checkbox"
                                  className="checkbox"
                                />
                              </label>
                            </th>
                            <td>
                              <div className="flex items-center space-x-3">
                                <div>
                                  <div className="font-bold">
                                    Gardening Services
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>120</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                  <div className="w-5/12 mt-5">
                    <label for="country">Referral Code</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        type="text"
                        name="StreetName"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Referral Code "
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                  
                   </div>
                  <div className="md:col-span-5 mt-10 text-right">
                    <button className="bg-[#0000FF] hover:bg-blue-700 text-[#fff] font-bold py-4 px-8 rounded">
                    {
                          loading ? <Loading/> : <><span>Submit</span></>
                        }
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    </div>
    <Footer/>
   </div>
  );
};

export default ClientReg;
