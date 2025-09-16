"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';

const industries = [
    { name: "Track Mounted Jaw 811", link: "/products/mobileseries/jaw811" },
    { name: "Track Mounted Jaw 811 S", link: "/products/mobileseries/jaw811s" },

  ];

const steps = [
  "Large feed opening for big rock sizes",
  "High throughput for faster production cycles",
  "Hydraulic adjustment for quick changeovers",
  "Low maintenance requirements for reduced downtime",
  "Track-mounted design for full site mobility"
];

export default function TrackMountedJawCrusher() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#ec6b24] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/mobileseries/TJ1.jpg"
            alt="AI Chatbot Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
           <h2 className="text-3xl font-bold mb-5">
            Powerful Crushing. Total Mobility.
          </h2>
          <p className="text-base text-gray-200 mb-6">
           The Hefty Track Mounted Jaw Crusher is engineered to deliver high-capacity primary crushing with the freedom of on-site mobility. Designed for mining, quarrying, construction, and recycling applications, it combines robust performance with the flexibility to operate anywhere your project demands.
          </p>
         
        </div>
      </section>

      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white flex justify-center">
        <div className="max-w-7xl text-center">
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] leading-tight mb-6">
            What is a Track Mounted Jaw Crusher?
            </h2>
            <p className='text-base text-gray-700'>
              A Track Mounted Jaw Crusher is a mobile crushing solution where the crusher is mounted on heavy-duty tracks instead of wheels. This design allows the machine to move independently around the site, eliminating the need for additional transport equipment and reducing material handling costs.
            </p>
             <p className="text-base text-gray-700">Hefty The Hefty Track Mounted Jaw Crusher is the perfect solution for projects that require quick relocation, easy setup, and high productivity without sacrificing crushing power.</p>
           
          </div>
        </div>
      </section>

       <section className="bg-[#ec6b24] text-white px-8 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div>
                <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                  Key Features of the Hefty Track Mounted Jaw Crusher
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
                  <h3 className="text-xl text-white font-semibold mb-2"> High Mobility on Tracks</h3>  
                   <p className="text-sm text-white">
                    Equipped with heavy-duty crawler tracks, the crusher can navigate tough terrains such as rocky quarry floors, muddy construction sites, and uneven mining grounds with ease.
                  </p>
                </div>
               
                  
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Integrated Crushing System</h3>
                   <p className="text-sm text-white">
                    Features an efficient vibrating feeder, powerful jaw crusher, and discharge conveyor in one compact mobile unit—streamlining the entire crushing process.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Adjustable Output Size </h3>
                   <p className="text-sm text-white">
                    Hydraulic setting adjustments allow you to control the output size, making it ideal for different applications from coarse aggregates to smaller crushed material.
                  </p>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Fuel-Efficient Powertrain</h3>
                   <p className="text-sm text-white">
                   Designed for optimal performance with reduced fuel consumption, lowering your operational costs.
                  </p>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Heavy-Duty Build</h3>
                   <p className="text-sm text-white">
                    Built from reinforced steel with wear-resistant jaw plates for long-lasting durability, even in high-abrasion applications.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Quick Setup</h3>
                   <p className="text-sm text-white">
                    Operational within hours of arrival, minimizing downtime and maximizing productivity.
                  </p>
                </div>
              </div>
            </div>
          </section>

      <section className="bg-[#f5f5f5] flex justify-center py-12 md:py-20 w-full">
  <div className="max-w-4xl text-center">
    <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] mb-8">
      Technical Advantages
    </h2>

    <ul className="space-y-4 max-w-2xl mx-auto">
      {steps.map((step, idx) => (
        <li
          key={idx}
          className="flex items-center gap-3 text-gray-800 text-base md:text-lg justify-center"
        >
          <CheckCircle className="text-blue-900" size={20} />
          <span>{step}</span>
        </li>
      ))}
    </ul>
  </div>
</section>

            <section>
        <div className="bg-white text-blue-900 px-6 py-16 mb-15 mt-10">
      <h2 className="text-3xl text-blue-900 hover:text-[#ec6b24] font-bold mb-10">
        Types of Track Mounted Jaw
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