import { useEffect, useRef, useState } from "react";

import PhoneInput from "react-phone-input-2";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import "../style/style.css"
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import Loading from "../components/Loading";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Registation = () => {

  const [data, setData] = useState([]);
 
  const [getstate, setstate] = useState([]);
 
  const [city, setcity] = useState([]);
  const [phone, setPhone] = useState("");
  const [captcha, setcaptcha] = useState(false);
  const [captchaerror, setCaptchaerror] = useState("");
  const [loading, setLoading] = useState(false);
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
  const randomNumber = Math.floor(Math.random() * 900000) + 100000;


  const handalesubmit = (e) => {
    e.preventDefault();

    const country = e.target.country.value;
    const state = e.target.state.value;
    const city = e.target.state.value;

    const Businesscate = e.target.category.value;
    const businessName = e.target.businessname.value;
    const name = e.target.full_name.value;
    const email = e.target.emailaddress.value;


    setLoading(true)
    const formData = {
      name: name,
      email: email,
      country: country,
      state: state,
      city: city,
      businessName: businessName,
      Businesscate: Businesscate ,
      partnerId: randomNumber
    }
    
    fetch("https://api.letusmaintain.com/registration", {
      method: "POST",
      headers: {
          "content-type": "application/json",
        },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
        setLoading(false)
        Swal.fire(
          "Application Received",
          `Your Channel Partner ID Is ${data.partnerId}`,
          "success"
        );
        e.target.reset();
      }).catch((error)=> console.log(error))
    
  };

  return (
    <div className="">
     
  
    
      <img
        className="relative  lg:block  w-screen h-auto"
        src="https://images.unsplash.com/photo-1432847712612-926caafaa802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
        alt=""
      />
        <div className="absolute top-0">
    <Nav  other={"other"}/>
    </div>
      <div className=" lg:w-8/12   m-auto">
        <div class="min-h-screen absolute top-16  flex ml-0 lg:ml-60">
          <div class="container max-w-screen-lg flex items-center ">
            <div className="">
              <div className="flex pt-20 justify-between items-center">
                <div className="">
                  <h2 class="font-semibold text-xl text-[#fff] pb-10">
                    Please Fill in the below details{" "}
                  </h2>
                </div>
                
              </div>

              <div class="bg-[#fff]  rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div class="grid  gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <form onSubmit={handalesubmit} class="lg:col-span-3 ">
                    <div class="grid gap-4 gap-y-5 text-sm grid-cols-1 ">
                      <div class="md:col-span-4">
                        <label for="full_name">Full Name*</label>
                        <input
                          required
                          placeholder="Jhone Die"
                          type="text"
                          name="full_name"
                          id="full_name"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>

                      <div class="md:col-span-4">
                        <label for="email">Email Address*</label>
                        <input
                          required
                          type="email"
                          name="emailaddress"
                          id="email"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="email@domain.com"
                        />
                      </div>
                      <div class="md:col-span-4">
                        <label >Enter Business Name*</label>
                        <input
                          required
                          type="text"
                          name="businessname"
                          id="email"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Your Business name"
                        />
                      </div>
                      <div class="md:col-span-2">
                        <label for="country">*Select Country*</label>
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <select
                            required
                            onChange={(e) => handalecountry(e)}
                            name="country"
                            className="focus:outline-none w-full bg-transparent"
                            id=""
                          >
                            {country.map((items) => (
                              <option required value={items} key={items}>
                                {items}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div class="md:col-span-2">
                        <label for="country">STATE*</label>
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <select
                            required
                            onChange={(e) => handalestate(e)}
                            name="state"
                            className="focus:outline-none w-full bg-transparent"
                            id=""
                          >
                            <option>SELECT STATE</option>
                            {getstate.map((items) => (
                              <option value={items} key={items}>
                                {items}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div class="md:col-span-2">
                        <label for="country">City*</label>
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <select
                            required
                            name="city"
                            className="focus:outline-none w-full bg-transparent"
                            id=""
                          >
                            <option value="">Select city</option>
                            {city?.map((item) => (
                              <option value={item}>{item.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div class="md:col-span-2">
                        <label for="country">Zip code*</label>
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            required
                            type="text"
                            name="zip"
                            id="email"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div class="md:col-span-2">
                        <label for="country">Select Business Category* </label>
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <select
                            required
                            name="category"
                            className="focus:outline-none w-full bg-transparent"
                            id=""
                          >
                            <option value="Realstate">
                              {" "}
                              Real Estate Promoter{" "}
                            </option>
                            <option value="Estate">Estate Agents </option>
                            <option value="Property">
                              Property Consultant{" "}
                            </option>
                            <option value="Electrical">
                              Electrical Stores
                            </option>
                            <option value="Hardware">Hardware Stores </option>
                            <option value="Architecture">Architecture</option>
                            <option value="Interior">Interior Designer </option>
                            <option value="Freelancer">Freelancer </option>
                          </select>
                        </div>
                      </div>

                      <div class="md:col-span-2 ">
                        <label for="country">PHONE NUMBER </label>
                        <div class="h-9 flex border  items-center mt-1">
                          <PhoneInput
                            inputStyle={{
                              border: "none",
                              background: "transparent",
                            }}
                            required
                            value={phone}
                            onChange={handleOnChange}
                            country={"in"}
                          />
                        </div>
                      </div>

                  

                      <div class="md:col-span-5 text-right">
                        <div class="">
                          <button class="bg-[#0000FF] hover:bg-blue-700 text-[#fff] font-bold py-5 px-9 rounded">
                            {loading ? (
                              <Loading />
                            ) : (
                              <>
                                <span>Submit</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
              <Footer/>
      </div>
    </div>
  );
};

export default Registation;
