import React from "react";
import img from "../assets/about.jpg";
import Button from "../layout/Button";
import Heading from "../layout/Heading";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className="md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className="w-full md:w-2/4">
        <img src={img} alt="About Us" />
      </div>

      <div className="w-full md:w-2/4 text-center space-y-2">
        <Heading title1="Empowering" title2="Education" color="text-brightGreen" />
        <p className="text-lightText">
          At Janindu Gayanga IT, we are passionate about empowering individuals through education. Our mission is to provide high-quality learning resources that inspire growth and success in the rapidly evolving world of technology and innovation.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Get in Touch" color="bg-brightGreen" textColor="text-white" />
        </Link>
      </div>
    </div>
  );
};

export default About;
