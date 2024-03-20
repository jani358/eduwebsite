import React from "react";
import Heading from "../layout/Heading";
import CoursesCard from "../layout/CoursesCard";
import webImg from "../assets/cat.png";
import appImg from "../assets/cat.png";
import graphicImg from "../assets/cat.png";
import digitalImg from "../assets/cat.png";

const Courses = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
      <Heading title1="Our" title2="Courses" />

      <div className=" flex flex-wrap justify-center gap-6 mt-6">
        <CoursesCard img={webImg} title="Web Development" />
        <CoursesCard img={appImg} title="App Development" />
        <CoursesCard img={graphicImg} title="Graphic Designer" />
        <CoursesCard img={digitalImg} title="Digital Marketing" />
      </div>
    </div>
  );
};

export default Courses;
