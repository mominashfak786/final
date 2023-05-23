import React, { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ContactEmergency, Email, Phone } from "@mui/icons-material";
import useTitle from "../hooks/usetitle";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
const ContactwithUs = () => {
  useTitle("contract with us  ");

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handalesubmit = (e) => {
    e.preventDefault();
    const fname = e.target.fname.value;
    const lname = e.target.lastname.value;
    console.log(fname, lname);

    const data = {
      firstname: fname,
      lastname: lname,
    };
    axios
      .post("https://api.letusmaintain.com/contact", data)
      .then((res) => console.log(res.data));
  };

  return (
    <div className="">
      <img
        src="https://static.vecteezy.com/system/resources/previews/006/852/804/original/abstract-blue-background-simple-design-for-your-website-free-vector.jpg"
        className="relative lg:block h-[1700px] md:h-[1400px] "
        alt=""
      />

      <div className="absolute top-0">
        <Nav />
        <div class="max-w-screen-lg mx-auto mt-10 p-5 bg-[#ffff]">
          <div
            data-aos="fade-down-right"
            class="grid grid-cols-1 md:grid-cols-12 border"
          >
            <div class="bg-gray-900 md:col-span-4 p-10  ">
              <p class="mt-4 text-3xl md:text-center text-center  md:text-4xl  text-white text-sm text-[text-#ffffff]  leading-7 font-regular uppercase">
                Contact Us
              </p>
              <h3 class="text-xl md:text-center text-center md:text-2xl mt-3 text-white  leading-normal font-extrabold tracking-tight">
                Get In <span class="text-[#4B0082]">Touch</span>
              </h3>

              <div class="flex items-center mt-8 text-white">
                <span class="text-sm text-white ">
                  Operations Active in: <br /> Asia Europe & North America
                </span>
              </div>
              <div class="flex items-center mt-5 text-white">
                <Phone />
                <span class="text-sm ml-5 text-white ">+912269621753</span>
              </div>
              <div class="flex items-center mt-5 text-white">
                <ContactEmergency />
                <span class="text-sm ml-5 text-white ">10 am to 6pm (IST)</span>
              </div>
              <div class="flex items-center mt-5 text-white">
                <Email />
                <span class="text-sm ml-5 text-white ">
                  info@letusmaintain.com
                </span>
              </div>
            </div>
            <form
              onSubmit={handalesubmit}
              data-aos="fade-down-left"
              class="md:col-span-8 p-10"
            >
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    name="fname"
                    class="appearance-none bg-transparent border-b border-indigo-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200"
                    type="text"
                    placeholder="Jane"
                    aria-label="Full name"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    name="lastname"
                    class="appearance-none bg-transparent border-b border-indigo-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200"
                    type="text"
                    placeholder="Doe"
                    aria-label="Full name"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    City
                  </label>
                  <input
                    class="appearance-none bg-transparent border-b border-indigo-500  w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200"
                    type="text"
                    placeholder="Mumbai"
                    aria-label="Full name"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Query Type
                  </label>
                  <select
                    class="appearance-none bg-transparent border-b border-indigo-500  w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200"
                    id="form_need"
                    name="need"
                    required="required"
                    data-error="Please specify your need."
                  >
                    <option value="" selected="" disabled="">
                      --Select--
                    </option>
                    <option>Account</option>
                    <option>Payment</option>
                    <option>Service</option>
                    <option>Complaint</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Email Address
                  </label>
                  <input
                    class="appearance-none bg-transparent border-b border-indigo-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200"
                    type="email"
                    placeholder="jane@exp.com"
                    aria-label="Full name"
                  />
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Your Message
                  </label>
                  <textarea
                    rows="10"
                    class="appearance-none bg-transparent border-b border-indigo-500 w-full text-gray-700 mr-3 p-4 focus:bg-gray-200 leading-tight focus:outline-none"
                    type="email"
                    placeholder="jane@exp.com"
                    aria-label="Full name"
                  ></textarea>
                </div>
                <div class="flex justify-between w-full px-3">
                  <div class="md:flex md:items-center">
                    <label class="block text-gray-500 font-bold">
                      <input class="mr-2 leading-tight" type="checkbox" />
                      <span class="text-sm">Send me your newsletter!</span>
                    </label>
                  </div>
                  <button
                    class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-24">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ContactwithUs;
