import { useState } from "react";
import "../style/style.css";
import PhoneInput from "react-phone-input-2";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import Loading from "../components/Loading";
import Stripe from "stripe";
import { CardElement } from "react-stripe-elements";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const stripe = new Stripe(
  "pk_test_51N5av4SAHh9BgXprDapq9Dd6BdAcYhDER1IJgVvQybnIK1QeuGOoeJSIcp8bQ0IsDgZHTPshbljULvRPbqc5qBnX009i7KbQwO"
);

const packagePrices = {
  Asia: {
    India: "INR 9999",
    Turkey: "TRY 7499",
    Thailand: "Thai B. 17500",
    Singapore: "SGD 1099",
    UAE: "Dirham 4900 ",
    Hong_Kong: "HK$ 6900",
  },
  North_America: {
    Canada: "CAD 1200",
    USA: "US$ 1350 ",
  },
  Europe: {
    UK: "GBP",
    Germany: "Euro 950",
    France: "Euro 950",
    Italy: "Euro 950 ",
    Netherlands: "Euro 950 ",
    Ireland: "Euro 950 ",
    Switzerland: "CHF",
    Poland: "PLN",
    Belgium: "Euro 950 ",
    Portugal: "Euro 950 ",
    Spain: "Euro 950 ",
    Slovakia: "SKK",
    Greece: "Euro 950 ",
    Austria: "Euro 950 ",
    Hungary: "HUF ",
    Czech_Republic: "CZK",
    Serbia: "RSD",
    Denmark: "DKK",
    Sweden: "SEK",
    Norway: "NOK",
    Lithuania: "LTL",
    Romania: "RON",
  },
};

const CountryPackages = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedPackagePrice, setSelectedPackagePrice] = useState("");
  const [gender, setGender] = useState("");

  const [distance, setDistance] = useState("");

  const [city, setcity] = useState([]);
  const [phone, setPhone] = useState("");
  const [captcha, setcaptcha] = useState(false);
  const [captchaerror, setCaptchaerror] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentIntent, setPaymentIntent] = useState(null);
  const handleRegionSelection = (e) => {
    const selectregion = e.target.value;
    setSelectedRegion(selectregion);
    setSelectedCountry("");
    setSelectedPackagePrice("");
  };

  const onChange = () => {
    setcaptcha(true);
    setCaptchaerror("");
  };

  const handleCountrySelection = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setSelectedPackagePrice(packagePrices[selectedRegion][country]);
  };

  const handleOnChange = (value) => {
    setPhone(value);
  };

  const handalerazorpay = (formData) => {
    const data = { amount: 150 };
    axios
      .post("http://localhost:5000/order", data)
      .then((res) => {
        handalerazorpay(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const handalerazorpay = (data) => {
      const options = {
        key: "rzp_test_WjQrOkgltnhkbY",
        amount: parseInt(data?.amount) * 100,
        currency: data?.currency,
        order_id: data?.id,
        name: "LETUSMAINTAIN.COM",
        image: "https://i.ibb.co/gZ3JXLC/letus.png",
        description: "Welcome to letusmaintain.com happy to see you here",
        handler: function (response) {
          console.log(response);
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    };
  };
  const handalestripe = async (formData) => {
    const data = {
      name: "takdir",
      email: "test@gmail.com",
      amount: 140,
    };
    const paymentIntentResponse = await fetch("http://localhost:5000/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const paymentIntent = await paymentIntentResponse.json();

    setPaymentIntent(paymentIntent);

    // Confirm payment
    const { error } = await stripe.confirmCardPayment(
      paymentIntent.client_secret,
      {
        payment_method: {
          card: Element.getElement(CardElement),
          billing_details: {
            name: data.name,
            email: data.email,
          },
        },
      }
    );

    if (error) {
      console.error(error);
      // Handle payment error
    } else {
      // Payment successful
    }
  };
  const handalepaypal = (formData) => {
    console.log(formData);
  };

  const handalesubmit = (e) => {
    e.preventDefault();

    const fulladdress = e.target.fulladdress.value;
    const password = e.target.password.value;
    const name = e.target.full_name.value;
    const email = e.target.emailaddress.value;
    const packagePrices = selectedPackagePrice;
    // console.log(fulladdress, password, name, email, packagePrices);
    if (captcha) {
      setLoading(true);
      const formData = {
        name: name,
        email: email,
        password: password,
        packagePrices: packagePrices,
        fulladdress: fulladdress,
      };

      Swal.fire({
        title: "Select A Payment Method",
        html:
          '<button  margin-right:10px;"  class="modal-button" id="razorpay">Razor Pay</button><button class="modal-stripe" id="stripe">Stripe</button><button class="modal-paypal" id="paypal">Paypal</button>',
        didOpen: () => {
          document
            .getElementById("razorpay")
            .addEventListener("click", () => handalerazorpay(formData));
          document
            .getElementById("stripe")
            .addEventListener("click", () => handalestripe(formData));
          document
            .getElementById("paypal")
            .addEventListener("click", () => handalepaypal(formData));
        },
      });
    } else {
      setCaptchaerror("please fill captcha");
    }
  };
  return (
    <div>
      <style>
        {`
          .modal-button {
            background-color: #3395ff;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border-reduce: 7px;
            
            margin-right:10px;
          }
          .modal-paypal {
            background-color: #003087;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            margin-right:10px;
            border-reduce: 7px;
          }
          .modal-stripe {
            background-color: #626cd9;
            color: white;
            border: none;
            padding: 10px 20px;
            margin-right:10px;
            font-size: 16px;
            cursor: pointer;
            border-reduce: 7px;
          }
          
          
        `}
      </style>
      <div>
        <img
          className="relative lg:block h-[1700px] md:h-[1400px] "
          src="https://www.advanceecomsolutions.com/wp-content/uploads/2022/10/became-a-partner.jpg"
          alt=""
        />
        <div className="absolute top-0">
          <Nav type="enterprice" />
        </div>
        <div className=" lg:w-8/12 m-auto ">
          <div class="min-h-screen absolute top-32  flex ml-0 lg:ml-20">
            <div class="container max-w-screen-lg ">
              <div className="">
                <div className="block justify-between items-center">
                  <h2 class="font-semibold text-xl text-center mb-5  text-white">
                    Please Fill in the below details{" "}
                  </h2>
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
                          <label>Set A Password*</label>
                          <input
                            required
                            type="text"
                            name="password"
                            id="email"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder="Your Business name"
                          />
                        </div>
                        <div class="md:col-span-4">
                          <label for="email">Your Full Address*</label>
                          <input
                            required
                            type="text"
                            name="fulladdress"
                            id="email"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder="Jerry Seinfeld Apartment 5A 129 West 81st Street"
                          />
                        </div>

                        <div class="md:col-span-3">
                          <label for="address">Permission Type : </label>
                          <input
                            type="radio"
                            className="ml-5"
                            id="Apartment"
                            name="gender"
                            value="Apartment"
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender === "Apartment"}
                          />
                          <label className="ml-2" htmlFor="Apartment">
                            Apartment
                          </label>
                          <input
                            type="radio"
                            id="House"
                            name="gender"
                            className="ml-5"
                            value="House"
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender === "House"}
                          />
                          <label className="ml-2" htmlFor="House">
                            House/Villa
                          </label>
                          <input
                            type="radio"
                            id="other"
                            name="gender"
                            className="ml-5"
                            value="Farm"
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender === "Farm"}
                          />
                          <label className="ml-2" htmlFor="">
                            Farm House
                          </label>
                        </div>
                        <div class="md:col-span-4 ">
                          <label for="address">Distance from Center : </label>
                          <input
                            type="radio"
                            className="ml-5"
                            id="5km"
                            name="distance"
                            value="5km"
                            onChange={(e) => setDistance(e.target.value)}
                            checked={distance === "5km"}
                          />
                          <label className="ml-2" htmlFor="Apartment">
                            With In 5km
                          </label>
                          <input
                            type="radio"
                            id="10km"
                            name="distance"
                            className="ml-5"
                            value="10km"
                            onChange={(e) => setDistance(e.target.value)}
                            checked={distance === "10km"}
                          />
                          <label className="ml-2" htmlFor="House">
                            10KM
                          </label>
                          <input
                            type="radio"
                            id="other"
                            name="distance"
                            className="ml-5"
                            value="20km"
                            onChange={(e) => setDistance(e.target.value)}
                            checked={distance === "20km"}
                          />
                          <label className="ml-2" htmlFor="">
                            20KM
                          </label>
                          <input
                            type="radio"
                            id="other"
                            name="distance"
                            className="ml-5"
                            value="above20"
                            onChange={(e) => setDistance(e.target.value)}
                            checked={distance === "above20"}
                          />
                          <label className="ml-2" htmlFor="">
                            Above 20KM
                          </label>
                        </div>

                        <div class="md:col-span-2">
                          <label for="country">Have Reffer Code?</label>
                          <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <input
                              type="text"
                              name="zip"
                              id="email"
                              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              placeholder=""
                            />
                          </div>
                        </div>

                        <div class="md:col-span-2 z-10 ">
                          <label for="country">Phone Number </label>
                          <div class="h-9 flex border  items-center mt-1">
                            <PhoneInput
                              inputStyle={{
                                border: "none",
                                background: "transparent",
                              }}
                              value={phone}
                              onChange={handleOnChange}
                              country={"in"}
                            />
                          </div>
                        </div>

                        <div class="md:col-span-2">
                          <label for="country">Select Region*</label>
                          <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <select
                              required
                              onClick={(e) => handleRegionSelection(e)}
                              name="country"
                              className="focus:outline-none w-full bg-transparent"
                              id=""
                            >
                              {Object.keys(packagePrices).map((region) => (
                                <option key={region} value={region}>
                                  {region}
                                </option>
                              ))}
                            </select>
                          </div>
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
                                  {Object.keys(
                                    packagePrices[selectedRegion]
                                  ).map((country) => (
                                    <option key={country} value={country}>
                                      {country}
                                    </option>
                                  ))}
                                </select>
                              </>
                            )}
                          </div>
                        </div>

                        <div class="md:col-span-5 z-0">
                          <label for="country">Services in Package: </label>
                          <div class=" ">
                            <div className="overflow-x-auto w-full">
                              <table className="table w-full">
                                {/* head */}
                                <thead>
                                  <tr>
                                    <th> Type of Services </th>
                                    <th>Number Of Visits</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {/* row 1 */}
                                  <tr>
                                    <td>
                                      <div className="flex items-center space-x-3">
                                        <div>
                                          <div className="font-bold">
                                            Hart Hagerty
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      18
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="flex items-center space-x-3">
                                        <div>
                                          <div className="font-bold">
                                            Plumbing Maintenance
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      10
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="flex items-center space-x-3">
                                        <div>
                                          <div className="font-bold">
                                            Computer System Maintenance
                                            (Hardware & Software){" "}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      8
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="flex items-center space-x-3">
                                        <div>
                                          <div className="font-bold">
                                            Carpenter Services
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      6
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="flex items-center space-x-3">
                                        <div>
                                          <div className="font-bold">
                                            F.M.O Review{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      Half Yearly Site Audit
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="flex items-center space-x-3">
                                        <div>
                                          <div className="font-bold">
                                            Yearly Fee
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="mt-5 sm:mt-10 -mb-5 sm:-mb-20">
                                      <h2 className="text-xl sm:text-2xl w-40 font-bold bg-[#00ff00] pl-5 pt-2 pb-2 text-white rounded">
                                        {selectedPackagePrice
                                          ? selectedPackagePrice
                                          : " "}
                                      </h2>
                                      <br />
                                    </td>
                                  </tr>
                                </tbody>
                                {/* foot */}
                              </table>
                            </div>
                          </div>
                        </div>

                        <div class="md:col-span-2">
                          <ReCAPTCHA
                            sitekey="6LeM1swlAAAAABoXDNzY-heV1SEr_IF1dXRGoBOD"
                            required
                            onChange={onChange}
                          />
                          <p className="text-red-600">{captchaerror}</p>
                        </div>

                        <div class="md:col-span-5 text-center">
                          <div class="">
                            <button class="bg-[#0000FF] hover:bg-blue-700 text-[#fff] font-bold p-4  rounded">
                              {loading ? (
                                <Loading />
                              ) : (
                                <>
                                  <span>Subscribe Now</span>
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
        <Footer />
      </div>
    </div>
  );
};

export default CountryPackages;
