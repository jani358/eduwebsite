import React from "react";
import img from "../assets/hero.svg";
import Button from "../layout/Button";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className="md:w-2/4 text-center">
        <h2 className="text-5xl font-semibold leading-tight">
          Empowering Learning with
          <span className="text-brightGreen"> Janindu Gayanga IT</span>
        </h2>
        <p className="text-lightText mt-5 text-start">
          Welcome to Janindu Gayanga IT, your premier destination for innovative IT solutions. We specialize in crafting digital experiences that drive growth and success for businesses worldwide.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>

      <div className="w-full md:w-2/4">
        <img src={img} alt="Janindu Gayanga IT" />
      </div>
    </div>
  );
};

export default Home;
