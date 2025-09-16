"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';


const industries = [
    { name: "VIBRATING SCREEN MVS SERIES", link: "/products/screens/vibratingscreen" },
  ];


export default function Crushers() {
  return (
    <>
      <section className="py-20 px-6  bg-[#ec6b24] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/screens/S1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-5">
           Screens
          </h2>
          <p className="text-base text-gray-200 mb-6">
           At Hefty, we provide advanced screening solutions designed to deliver precision, efficiency, and durability for your material separation needs. Our range of screens is engineered to handle diverse applications — from mining and quarrying to recycling and industrial processing — ensuring optimal performance in every operation.
          </p>
          <p className="text-base text-gray-200 mb-6">Our screens are built with high-quality materials and innovative designs to achieve maximum throughput while minimizing downtime and maintenance. Whether you require coarse, medium, or fine screening, we have the right solution to match your production goals.
          </p>
          
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white flex justify-center">
        <div className="max-w-7xl text-center">

          {/* Right Side */}
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] leading-tight mb-6">
              Applications
            </h2>
            <ol className="text-base text-black mb-6">
              <li>Aggregate production</li>
              <li>Mining and mineral processing</li>
              <li>Recycling plants</li>
              <li>Industrial screening requirements</li>
              
            </ol>
          </div>
        </div>
      </section>
      
     
          <section className="bg-[#ec6b24] text-white px-8 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div>
                <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                  Key Features
                </h4>
                <h2 className="text-4xl font-bold leading-tight mb-4">
                  Hefty –<br />
                  <span className="text-gray-700">Powering Productivity</span> <br />
                  <span className="text-white">With Precision Crushing</span>{" "}<br/>
                  <span className="text-gray-700">& Screening</span>
                </h2>
                
                <p className='text-gray-900 text-sm'>At Hefty, we understand that a crusher isn’t just a machine – it’s the heart of your operation. That’s why our crushers are built with a commitment to engineering excellence, operational reliability, and long-term value.</p><br/>
                <button className="border border-blue-900 text-white px-6 py-3 hover:bg-blue-900 transition flex items-center gap-2 mt-5">
                  <span className="text-blue-900">&#8213;</span> Get In Touch
                </button>
              </div>
      
              {/* Right Section */}
              <div className="space-y-6">
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">High Screening Efficiency – Delivers accurate separation of materials.</h3>
                 
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Heavy-Duty Construction – Built to withstand tough operating conditions.</h3>
                  
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Versatile Applications – Suitable for aggregates, minerals, coal, and industrial materials.</h3>
                   
                  
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Low Maintenance Design – Easy access for cleaning and servicing.</h3>
                  
                  
                </div>
                 
              </div>
            </div>
          </section>
        

      <section className="bg-gray-200 px-6 py-12 md:py-20 w-full flex justify-center">
      <div className="max-w-7xl text-center gap-12">
        {/* Left: Text and Checklist */}
        <div>
          <h2 className="text-3xl text-blue-900 hover:text-[#ec6b24] font-bold leading-tight mb-4">
                  Global Reach –<br />
                  <span className="text-blue-900 hover:text-[#ec6b24]">Trusted by Industries Worldwide</span> 
                </h2>
          <p className="text-black text-base mb-6 max-w-xl">
            With installations across mining, construction, quarrying, and recycling industries in multiple countries, Hefty has earned a reputation for reliability and excellence. Our crushers are chosen by businesses worldwide for their consistent performance, ease of maintenance, and superior return on investment. Wherever you operate, our global service network ensures you’re never without support.
          </p>
          
         
           
        </div>
      </div>
    </section>

    
     <section>
        <div className="bg-white text-blue-900 px-6 py-16 mb-15 mt-10">
      <h2 className="text-3xl text-blue-900 hover:text-[#ec6b24] font-bold mb-10">
        Types of Screen
      </h2>
      

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {industries.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="border border-blue-900 rounded-md py-6 px-4 flex items-center justify-center hover:bg-[#ec6b24] transition text-sm font-medium text-center"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
      </section>
    
    <ContactSection />
    
      
    </>
  );
}
