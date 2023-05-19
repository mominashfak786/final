import { useEffect, useRef, useState } from "react";

import PhoneInput from "react-phone-input-2";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";

import "react-phone-input-2/lib/style.css";
import axios from "axios";
import Loading from "../components/Loading";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Career = () => {
  const [gender, setGender] = useState("");
  const [data, setData] = useState([]);
  const [getcountry, setCountry] = useState();
  const [getstate, setstate] = useState([]);
  const [selectedState, setSelectedState] = useState();
  const [city, setcity] = useState([]);
  const [phone, setPhone] = useState("");
  const [captcha, setcaptcha] = useState(true);
  const [captchaerror, setCaptchaerror] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    AOS.init({
      duration:1000
    })
      },[])
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
  const handalesubmit = (e) => {
    e.preventDefault();

    const country = e.target.country.value;
    const state = e.target.state.value;
    const city = e.target.state.value;
    const experience = e.target.experience.value;
    const positins = e.target.position.value;
    const potisionType = e.target.type.value;
    const name = e.target.full_name.value;
    const email = e.target.email.value;
    const gender = e.target.gender.value;
    const dateofbirth = e.target.dateofbirth.value;
    const Experienced = e.target.Experienced.value;
    const ctc = e.target.ctc.value;
    const file = e.target.pdfFile.files[0];

    if (captcha) {
      const formData = new FormData();
      formData.append("country", country);
      formData.append("state", state);
      formData.append("city", city);
      formData.append("positins", positins);
      formData.append("potisionType", potisionType);
      formData.append("experience", experience);
      formData.append("gender", gender);
      formData.append("dateofbirth", dateofbirth);
      formData.append("Experienced", Experienced);
      formData.append("ctc", ctc);
      formData.append("country", country);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("file", file);
      setLoading(true);
      fetch("http://localhost:5000/career", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          Swal.fire(
            "Application Received",
            "Thanks for submitting your application we will get back to you within 24:00 to 48:00 hrs as per working days (Monday to Friday) ",
            "success"
          );
          e.target.reset();
        });
    } else {
      setCaptchaerror("please fill captcha");
    }
  };

  return (
    <div>
      <img
        className="relative  lg:block  w-screen h-[1200px]"
        src="https://png.pngtree.com/thumb_back/fh260/background/20220525/pngtree-businessman-walking-on-the-career-road-image_1401185.jpg"
        alt=""
      />
    <div className="absolute top-1">
        <Nav/>
    </div>
      <div className=" lg:w-8/12 m-auto">
        <div class="min-h-screen absolute top-32  flex ml-0 lg:ml-60">
          <div class="container max-w-screen-lg ">
            <div className="">
              <div className="flex justify-between items-center">
                <div className="">
                  <h2 class="font-semibold text-xl text-gray-600">
                    Please Fill in the below details{" "}
                  </h2>
                </div>
                
              </div>

              <div class="bg-[#ffff]  rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div class="grid  gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <form data-aos="fade-right" onSubmit={handalesubmit} class="lg:col-span-3 ">
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
                          type="text"
                          name="email"
                          id="email"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="email@domain.com"
                        />
                      </div>
                      <div class="md:col-span-2">
                        <label for="country">COUNTRY APPLYING FOR *</label>
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
                        <label for="country">PROVINCE*</label>
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <select
                            required
                            onChange={(e) => handalestate(e)}
                            name="state"
                            className="focus:outline-none w-full bg-transparent"
                            id=""
                          >
                            <option>SELECT PROVINCE</option>
                            {getstate.map((items) => (
                              <option value={items} key={items}>
                                {items}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div class="md:col-span-2">
                        <label for="country">CITY*</label>
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <select
                            required
                            name="city"
                            className="focus:outline-none w-full bg-transparent"
                            id=""
                          >
                            <option value="">SELECT CITY</option>
                            {city?.map((item) => (
                              <option value={item}>{item.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div class="md:col-span-2">
                        <label for="country">POSITION APPLIED AS </label>
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <select
                            name="experience"
                            className="focus:outline-none w-full bg-transparent"
                            id=""
                          >
                            <option value="fresher"> Fresher </option>
                            <option value="Experienced">Experienced</option>
                          </select>
                        </div>
                      </div>
                      <div class="md:col-span-2">
                        <label for="country">POSITION APPLIED FOR </label>
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <select
                            name="position"
                            className="focus:outline-none w-full bg-transparent"
                            id=""
                          >
                            <option value="Marketing"> Marketing </option>
                            <option value="Sales">Sales</option>
                            <option value="hr">Human Resource</option>
                            <option value="technology">Technology</option>
                            <option value="operations">Back Operations</option>
                            <option value="administriation">
                              Administration
                            </option>
                            <option value="management">Management</option>
                          </select>
                        </div>
                      </div>
                      <div class="md:col-span-2">
                        <label for="country">POSITION TYPE </label>
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <select
                            name="type"
                            className="focus:outline-none w-full bg-transparent"
                            id=""
                          >
                            <option value="Part_time"> Part Time </option>
                            <option value="Full_Time">Full Time</option>
                            <option value="contact">Contract</option>
                          </select>
                        </div>
                      </div>

                      <div class="md:col-span-2">
                        <label for="city">DATE OF BIRTH</label>
                        <input
                          type="date"
                          name="dateofbirth"
                          id="city"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder=""
                        />
                      </div>

                      <div class="md:col-span-2 mt-8">
                        <label for="address">GENDER : </label>
                        <input
                          type="radio"
                          className="ml-5"
                          id="male"
                          name="gender"
                          value="male"
                          onChange={(e) => setGender(e.target.value)}
                          checked={gender === "male"}
                        />
                        <label className="ml-2" htmlFor="male">
                          Male
                        </label>
                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          className="ml-5"
                          value="female"
                          onChange={(e) => setGender(e.target.value)}
                          checked={gender === "female"}
                        />
                        <label className="ml-2" htmlFor="female">
                          Female
                        </label>
                        <input
                          type="radio"
                          id="other"
                          name="gender"
                          className="ml-5"
                          value="other"
                          onChange={(e) => setGender(e.target.value)}
                          checked={gender === "other"}
                        />
                        <label className="ml-2" htmlFor="">
                          Others
                        </label>
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
                            country={"us"}
                          />
                        </div>
                      </div>

                      <div class="md:col-span-2">
                        <label for="country">EXPERIENCE IN YEARS* </label>
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <select
                            name="Experienced"
                            className="focus:outline-none w-full bg-transparent"
                            id=""
                          >
                            <option value="0to1"> O to 1 </option>
                            <option value="1to3"> 1 to 3 </option>
                            <option value="1to3"> 1 to 3 </option>
                            <option value="3to5">3 to 5</option>
                            <option value="5to10">5 to 10 Or More</option>
                          </select>
                        </div>
                      </div>

                      <div class="md:col-span-2">
                        <label for="country">Expected CTC* </label>
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            required
                            type="text"
                            name="ctc"
                            id="city"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div class="md:col-span-2">
                        <label for="country">UPLOAD RESUME* (Only PDF) </label>
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            required
                            type="file"
                            name="pdfFile"
                            accept="application/pdf"
                            class="h-10 "
                          />
                        </div>
                      </div>
                      <div class="md:col-span-2">
                       
                      </div>

                      <div class="md:col-span-5 text-right">
                        <div class="">
                          <button class="bg-[#0000FF] text-[#fff] hover:bg-blue-700 text-white font-bold py-5 px-9 rounded">
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
      </div>
      <Footer/>
    </div>
  );
};

export default Career;
