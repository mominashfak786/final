import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "../style/slider.css";
export const ServicesSliderEnterprice = () => {
    return (
      <div className="slider-container  sm:flex sm:flex-col md:flex-row text-[#fff] ">
        <div className="sm:w-4/5 md:w-2/4 md:pl-10 pl-0 pt-10  pb-5 text-white">
          <h2 className="text-center text-2xl font-bold">BEFORE SUBSCRIPTION</h2>
          <Carousel infiniteLoop showIndicators={false}>
            <div className="">
              <p className="pt-10 pb-10 md:mt-0 mt-6">
                <span className="slideritem text-5xl rounded-full w-16 h-16 pl-10 pt-5 pr-10 pb-5">
                  1
                </span>
              </p>
              <p className="text-xl">Visit www.letusmaintain.com</p>
            </div>
            <div>
              <p className="pt-10 pb-10 md:mt-0 mt-6">
                <span className="slideritem text-5xl rounded-full w-16 h-16 pl-10 pt-5 pr-10 pb-5">
                  2
                </span>
              </p>
              <p className="text-xl">Go through the platform</p>
            </div>
            <div>
              <p className="pt-10 pb-10 md:mt-0 mt-6">
                <span className="slideritem text-5xl rounded-full w-16 h-16 pl-10 pt-5 pr-10 pb-5">
                  3
                </span>
              </p>
              <p className="text-xl">Fill the Subscription Form</p>
            </div>
            <div>
              <p className="pt-10 pb-10 md:mt-0 mt-6">
                <span className="slideritem text-5xl rounded-full w-16 h-16 pl-10 pt-5 pr-10 pb-5">
                  4
                </span>
              </p>
              <p className="text-xl">Choose from multiple payment options</p>
            </div>
            <div>
              <p className="pt-10 pb-10 md:mt-0 mt-6">
                <span className="slideritem text-5xl rounded-full w-16 h-16 pl-10 pt-5 pr-10 pb-5">
                  5
                </span>
              </p>
              <p className="text-xl">Contract Signing</p>
            </div>
            <div>
              <p className="pt-10 pb-10 md:mt-0 mt-6">
                <span className="slideritem text-5xl rounded-full w-16 h-16 pl-10 pt-5 pr-10 pb-5">
                  6
                </span>
              </p>
              <p className="text-xl">Your account is now activated</p>
            </div>
            <div>
              <p className="pt-10 pb-10 md:mt-0 mt-6">
                <span className="slideritem text-5xl rounded-full w-16 h-16 pl-10 pt-5 pr-10 pb-5">
                  7
                </span>
              </p>
              <p className="text-xl">Enjoy</p>
            </div>
          </Carousel>
        </div>
        <div className="sm:w-4/5 md:w-2/4 md:pr-10 pr-0 pt-10 pb-5 text-white">
          <h2 className="text-center text-2xl font-bold ">AFTER SUBSCRIPTION</h2>
          <Carousel infiniteLoop showIndicators={false}>
            <div>
              <p className="pt-10 pb-10 md:mt-0 mt-6">
                <span className=" slideritem text-5xl rounded-full w-16 h-16 pl-10 pt-5 pr-10 pb-5">
                  1
                </span>
              </p>
              <p className="text-xl">After team reach to your premises</p>
            </div>
            <div>
              <p className="pt-10 pb-10 md:mt-0 mt-6">
                <span className=" slideritem text-5xl rounded-full w-16 h-16 pl-10 pt-5 pr-10 pb-5">
                  2
                </span>
              </p>
              <p className="text-xl">Login to client dashboard</p>
            </div>
            <div>
              <p className="pt-10 pb-10 md:mt-0 mt-6">
                <span className=" slideritem text-5xl rounded-full w-16 h-16 pl-10 pt-5 pr-10 pb-5">
                  3
                </span>
              </p>
              <p className="text-xl">Go through with all features</p>
            </div>
            <div>
              <p className="pt-10 pb-10 md:mt-0 mt-6">
                <span className=" slideritem text-5xl rounded-full w-16 h-16 pl-10 pt-5 pr-10 pb-5">
                  4
                </span>
              </p>
              <p className="text-xl">Service Request</p>
            </div>
            <div>
              <p className="pt-10 pb-10 md:mt-0 mt-6">
                <span className=" slideritem text-5xl rounded-full w-16 h-16 pl-10 pt-5 pr-10 pb-5">
                  5
                </span>
              </p>
              <p className="text-xl">
                Facility Manager will assign task to the technician
              </p>
            </div>
            <div>
              <p className="pt-10 pb-10 md:mt-0 mt-6">
                <span className=" slideritem text-5xl rounded-full w-16 h-16 pl-10 pt-5 pr-10 pb-5">
                  6
                </span>
              </p>
              <p className="text-xl">Technician will complete his task</p>
            </div>
            <div>
              <p className="pt-10 pb-10 md:mt-0 mt-6">
                <span className=" slideritem text-5xl rounded-full w-16 h-16 pl-10 pt-5 pr-10 pb-5">
                  6
                </span>
              </p>
              <p className="text-xl">Fill the service feedback form</p>
            </div>
          </Carousel>
        </div>
      </div>
    );
  };