import React, { useEffect } from "react";
import "../style/trems.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import useTitle from "../hooks/usetitle";
import AOS from "aos";
import "aos/dist/aos.css";

const PaymentPolicy = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  useTitle("Payment Policy");
  return (
    <div className="">
      <div className="bg-[#808080]">
        <Nav />
      </div>
      <main data-aos="zoom-out-down" class="wrap mb-6">
        <section class="trams">
          <div class="container__heading">
            <h2 className="font-bold md:text-3xl text-xl text-green-700 mt-6">
              Return & Refund Policy of <br />
            <span className="font-bold md:text-3xl text-xl text-green-700 mt-6">  www.letusmaintain.com</span> 
            </h2>
          </div>
          <div class="container__content mt-6">
            <p>
              If you are not happy with your purchase, we will accept a return
              of a unused product within 14 days. Once we receive the returned
              item LetUsMaintain will then give a full refund (excluding
              shipping as we are unable to refund the initial shipping cost of
              your order). Our Return & Refund Policy was created by Return
              Refund Policy Template for www.letusmaintain.com Please allow 1-2
              weeks for your return to be processed. Discounted items are not
              eligible for a return. LetUsMaintain will not issue refunds for
              products purchased through other entities, such as distributors or
              retail partners. Returned items must be delivered to us unused, in
              original packaging and in the condition they were received or may
              not be eligible for refund or be subject to a restocking fee. We
              cannot be held responsible for items damaged or lost in return
              shipment, therefore we recommend an insured and trackable mail
              service. We are unable to issue a refund without actual receipt of
              the item(s) or proof of received return delivery. We aim to accept
              all returns. In the unlikely event that an item is returned to us
              in an unsuitable condition, we may have to send it back to you.
              All goods will be inspected on return
            </p>{" "}
            <br />
          </div>
          <div class="container__nav">
            <a class="btn" href="">
              Got it
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentPolicy;
