import React, { useEffect } from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
const Shipping = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, [])
    return (
        <div className="">
        <div className="bg-[#808080]">
        <Nav/>
        </div>
          <main  class="wrap">
      <section data-aos="zoom-out-up" class="trams">
        <div class="container__heading">
          <h2 className="font-bold text-3xl text-green-600 mt-6">Shipping policy</h2>
        </div>
        <div class="container__content">
          <p>At KSK Business Consultant, we are committed to ensuring that your shipping and delivery experience is
exceptional. We prioritize efficiency and customer satisfaction in every step of the process. Kindly take a
moment to familiarize yourself with our comprehensive shipping policy, which outlines our shipping
methods, delivery timelines, and important procedures:</p> <br/>
          <h2 className="font-bold text-3xl text-green-600 mt-6">Domestic Shipping policy :</h2>
          <h2 className="font-bold text-3xl text-green-600 mt-6">Shipment Processing Time:</h2>
          
          <p>We understand the importance of timely order processing. At KSK Business Consultant , all orders are
carefully processed within 2-3 business days. It&#39;s important to note that we do not ship or deliver orders
on weekends or holidays, as we want to ensure efficient delivery during regular business hours.

</p> <br />
          <h2 className="font-bold text-3xl text-green-600 mt-6">High Volume Orders:

</h2>
          <p> In the event of a high volume of orders, there may be a slight delay in shipments. We kindly ask for your
patience during such instances. Rest assured, we are dedicated to fulfilling orders as quickly as possible.
If there is a significant delay in the shipment of your order, we will promptly reach out to you via email
or telephone to provide updates.</p> <br />
      <h2 className="font-bold text-3xl text-green-600 mt-6">Transit Time:

</h2>
<p>We strive to ensure that your order reaches you in a timely manner. Please allow additional transit days
for delivery, especially during busy periods. Factors such as distance and shipping carrier availability may
influence the exact delivery timeline. We appreciate your understanding and cooperation.

</p>
      
    
     <h2 className="font-bold text-3xl text-green-600 mt-6">
     Communication:


     </h2>
    
      <p>
      At KSK Business Consultant , clear communication is a priority. If there are any changes or updates
regarding the shipment of your order, we will promptly notify you via email or telephone. Our goal is to
keep you informed throughout the shipping process, providing transparency and peace of mind. <br /> <br />
<span className='font-bold'>
If you have any further questions or concerns about our shipping and delivery policy, please don&#39;t
hesitate to reach out to our customer support team. We are here to assist you and ensure your
satisfaction with our services.
</span>

      </p>
      <h2 className="font-bold text-3xl text-green-600 mt-6">
      Shipping and Delivery Estimate:


      </h2>
   <p>Shipping charges for your order will be calculated and displayed at checkout.</p>
     

   <div className="overflow-x-auto mt-5 mb-5">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        
        <th>Shipment method</th>
        <th>Estimated delivery time</th>
        <th>Shipment Cost</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        
        <td>Fedex standard</td>
        <td>3-5 business days</td>
        <td>Free</td>
      </tr>
      {/* row 2 */}
      <tr className="hover">
       
        <td>Fedex two days</td>
        <td>2 business days</td>
        <td>$</td>
      </tr>
      {/* row 3 */}
      <tr>
       
        <td>Fedex overnight</td>
        <td>1-2 business days</td>
        <td>$</td>
      </tr>
    </tbody>
  </table>
</div>

<span className='mt-2 font-bold'>
*Please note that overnight delivery is limited to orders with delivery addresses within the
continent/country . For international orders or deliveries outside this region, alternative
shipping options will be provided. We would like to inform our valued customers that while
we strive to ensure prompt delivery, occasional delays may arise due to unforeseen
circumstances. We appreciate your understanding and patience in such situations.
</span>



<h2 className="font-bold text-3xl text-green-600 mt-6">Shipping Methods:

</h2>

<p>We utilize reputable shipping carriers to ensure reliable and secure delivery of your orders. The
specific shipping methods available will be displayed during the checkout process, and you can
choose the option that best suits your needs.

</p>
<h2 className="font-bold text-3xl text-green-600 mt-6">Order Processing Time:



</h2>
<p>Once your order is received and payment is confirmed, we will begin processing it promptly. Our
team will carefully prepare your items for shipment, including necessary quality checks and
packaging.
</p>
<h2 className="font-bold text-3xl text-green-600 mt-6">Shipping Timeframes:



</h2>
<p>The estimated shipping timeframes may vary based on factors such as the destination, shipping
method chosen, and availability of the products. We will provide you with an estimated delivery
date during the checkout process and in the order confirmation email.


</p>

<h2 className="font-bold text-3xl text-green-600 mt-6">Tracking Information:</h2>
<p>To keep you informed about the progress of your shipment, we will provide tracking information
as soon as it becomes available. You can track your package using the provided tracking number
through the carrier&#39;s website or tracking portal.</p>
<h2 className="font-bold text-3xl text-green-600 mt-6">Delivery Address:</h2>
<p>Please ensure that the shipping address provided during the order placement is accurate and
complete. We are not responsible for any delays or non-delivery resulting from incorrect or
incomplete address information. If you need to make changes to your delivery address, please
contact our customer support team as soon as possible.</p>
<h2 className="font-bold text-3xl text-green-600 mt-6">Delivery Attempts:</h2>
<p>Our shipping carriers will attempt delivery to the provided address according to their standard
procedures. If the carrier is unable to deliver the package on the first attempt, they may make
subsequent delivery attempts or leave a notification for you to arrange a pickup or reschedule
delivery as per their policies.</p>
<h2 className="font-bold text-3xl text-green-600 mt-6">Damaged or Lost Shipments:</h2>
<p>While we take utmost care in packaging and ensuring the safe transit of your items, unforeseen
circumstances can sometimes lead to damaged or lost shipments. If you receive a damaged
package, please notify us immediately, providing relevant details and supporting evidence. In
the case of lost shipments, we will work with the shipping carrier to investigate and resolve the
issue to the best of our ability.</p>
<h2 className="font-bold text-3xl text-green-600 mt-6">International Shipping:</h2>
<p>We offer international shipping to select destinations. However, please note that customs
regulations, import duties, taxes, and fees may apply when shipping to international locations.
Any additional charges related to customs clearance are the responsibility of the recipient.</p>
<h2 className="font-bold text-3xl text-green-600 mt-6">Shipping Policy Updates:</h2>
<p>We reserve the right to update or modify our shipping and delivery policy at any time without
prior notice. Any changes will be reflected on our website and will apply to all orders placed
after the policy update.</p> <br /><br />
<span className='font-bold'>
If you have any further questions or require assistance regarding our shipping and delivery
policy, please feel free to contact our customer support team. We are here to ensure your
shipping experience with Santech Facility is smooth and satisfactory.
</span>
        </div>
        <div class="container__nav">
         
          <a class="btn" href="">Got it</a>
        </div>
      </section>
    </main>
    <Footer/>
      </div>
    );
};

export default Shipping;