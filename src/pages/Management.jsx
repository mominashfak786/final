import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import backgroundImageUrl from "../assets/oterhs/contact-us-background-image-4.jpg"
const Management = () => {
    const styles = {
      
        // Add any other styles you want to apply
      };
    return (
        <div >
            <div style={styles}>

           <div className='bg-[#808080] pl-20 pr-20'>
           <Nav/>
           </div>

<div className='w-2/3 m-auto mt-20'>
    <h2 className='text-4xl font-bold text-white'>Lets Meet With Our Management </h2>
<div className='flex justify-between pb-20 pt-10'>
<div className="card w-96 bg-base-100 shadow-xl">
  
  <div className="card-body">
    <h2 className="card-title">
    Mr. Shivam Kanojia
    </h2>
      <div className="badge badge-secondary">Founder</div>
    
  
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  
  <div className="card-body ">
    <h2 className="card-title">
    Ms. Karin Sandalova
    </h2>
      <div className="badge badge-secondary">CO-FOUNDER</div>
   
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  
  <div className="card-body">
    <h2 className="card-title">
    Mr. Reni Ninan
    </h2>
      <div className="badge badge-secondary">CO-FOUNDER</div>
   
  
  </div>
</div>
</div>
</div>

           
            </div>
            <Footer/>
        </div>
    );
};

export default Management;