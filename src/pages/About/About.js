import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import "./about.css";
import LuminousCursor from "./LuminousCursor";
import ContinueShoppingButton from "../../components/Buttons/ContinueShoppingButton";
import { Drill } from 'lucide-react';



const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    if (location.state && location.state.data) {
      setPrevLocation(location.state.data);
    }
  }, [location]);

  return (
    <>
    <LuminousCursor />
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        {/* Hero Section */}
        <div
          className="hero-section w-full h-96 bg-cover bg-center mb-10"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1067496776/photo/top-view-of-drill-tool-and-another-equipment-on-wood-table-furniture-assembly-improvement-or.webp?a=1&b=1&s=612x612&w=0&k=20&c=X-D5lCVqcD4rRGOL1nr0hjNtpvagLY90ymXsk4MIL40=')",
          }}
        >
          <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center">
            <div className="flex items-center gap-4">
              <Drill className="text-white font-bold h-10 w-10 md:h-12 md:w-12" />
              <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
               About HardwareHub
              </h1>
            </div>
            <p className="text-white text-lg mt-4 text-center">
              Your trusted partner for premium hardware tools and equipment.
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="content-section grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Text Section */}
          <div>
            <h2 className="text-2xl font-semibold text-primeColor mb-4">
              Our Story
            </h2>
            <p className="text-base text-lightText mb-4">
              Established in 2021, HardwareHub has been a trusted provider of top-notch
              hardware tools and equipment for professionals and DIY enthusiasts alike.
              Our mission is to empower creators and builders with reliable, high-quality
              products that make every project a success.
            </p>
            <p className="text-base text-lightText mb-4">
              At HardwareHub, we understand the importance of precision and durability.
              Our extensive catalog includes everything from power tools to hand tools,
              carefully selected to meet the diverse needs of our customers.
            </p>
            <p className="text-base text-lightText mb-4">
              We are committed to innovation and customer satisfaction, ensuring that
              every product we offer meets the highest standards of performance and
              safety. Join us in building a better future, one tool at a time.
            </p>
          </div>

          {/* Right Image Section with Cards */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-4 img-card ">
              <img
                src="https://plus.unsplash.com/premium_photo-1678760859802-4688eb07ec42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGhhcmR3YXJlJTIwZnVybml0dXJlJTIwcGVyc29ufGVufDB8fDB8fHww"
                alt="About Orebi"
                className="w-full h-72 object-cover rounded-lg"
              />
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-4 img-card">
              <img
                src="https://plus.unsplash.com/premium_photo-1677151140442-5a3a34809044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGhhcmR3YXJlJTIwZnVybml0dXJlJTIwcGVyc29ufGVufDB8fDB8fHww"
                alt="Our Collections"
                className="w-full h-72 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className="team-section mt-10">
          <h2 className="text-2xl font-semibold text-primeColor mb-4 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="team-member text-center">
              <img
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxwZXJzb258ZW58MHx8MHx8fDA%3D"
                alt="John Doe"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-sm text-lightText">CEO & Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="team-member text-center">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww"
                alt="Jane Smith"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">Jane Smith</h3>
              <p className="text-sm text-lightText">Chief Designer</p>
            </div>

            {/* Team Member 3 (Fixed Issue) */}
            <div className="team-member text-center">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww"
                alt="Emily Johnson"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">Emily Johnson</h3>
              <p className="text-sm text-lightText">Marketing Head</p>
            </div>
          </div>
        </div>

        {/* Continue Shopping Button */}
        <ContinueShoppingButton /> {/* Use the new generic component */}
      </div>
    </div>
    </>
  );
};

export default About;
