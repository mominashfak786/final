import React, { useEffect } from 'react';
import "../style/trems.css"
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import useTitle from '../hooks/usetitle';
import AOS from "aos";
import "aos/dist/aos.css";
const Privacyandpolicy = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])
  useTitle("privacy and policy")
    return (
        <div className="">
          <div className="bg-[#808080] ">
          <Nav/>
          </div>
            <main  class="wrap">
        <section data-aos="zoom-out-up" class="trams">
          <div class="container__heading">
            <h2 className="font-bold text-3xl text-green-600 mt-6">Privacy Policy for SanTech Letusmaintain</h2>
          </div>
          <div class="container__content">
            <p>At LetUsMaintain, accessible from www.letusmaintain.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by LetUsMaintain and how we use it.

If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.

This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in LetUsMaintain. This policy is not applicable to any information collected offline or via channels other than this website</p> <br/>
            <h2 className="font-bold text-3xl text-green-600 mt-6">Consent</h2>
            
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.

</p> <br />
            <h2 className="font-bold text-3xl text-green-600 mt-6">Information we collect

</h2>
            <p> The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.

If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.

When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p> <br />
        <h2 className="font-bold text-3xl text-green-600 mt-6">How we use your information

</h2>
<p>We use the information we collect in various ways, including to:

</p>
        <ul>
          <li>Housing Society
</li>
          <li>Corporate Office
</li>
          <li>Retail Center Warehouse Factory Shopping Mall
</li>
          <li>Hotels</li>
          <li>Hospital Resort
</li>
          <li>Industry</li>
          <li>Govt</li>
          <li>University</li>
        </ul>
      
       <h2 className="font-bold text-3xl text-green-600 mt-6">
       Log Files


       </h2>
      
        <p>
        LetUsMaintain follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.


        </p>
        <h2 className="font-bold text-3xl text-green-600 mt-6">
        Advertising Partners Privacy Policies


        </h2>
        <p>
        You may consult this list to find the Privacy Policy for each of the advertising partners of LetUsMaintain.

Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on LetUsMaintain, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.

Note that LetUsMaintain has no access to or control over these cookies that are used by third-party advertisers.

CCPA Privacy Rights (Do Not Sell My Personal Information)

Under the CCPA, among other rights, California consumers have the right to:

Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.

Request that a business delete any personal data about the consumer that a business has collected.

Request that a business that sells a consumer's personal data, not sell the consumer's personal data.

If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.

GDPR Data Protection Rights

We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:

The right to access You have the right to request copies of your personal data. We may charge you a small fee for this service.

The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.

The right to erasure – You have the right to request that we erase your personal data, under certain conditions.

The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.

The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.

The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.

If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
        </p>
       






<h2 className="font-bold text-3xl text-green-600 mt-6">Children's Information

</h2>

<p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.

LetUsMaintain does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records

</p>
<h2 className="font-bold text-3xl text-green-600 mt-6">Changes to This Privacy Policy



</h2>
<p>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.

Our Privacy Policy was created with the help of the Privacy Policy Generato

</p>
<h2 className="font-bold text-3xl text-green-600 mt-6">Contact Us



</h2>
<p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.



</p>


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

export default Privacyandpolicy;