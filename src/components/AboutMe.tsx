import React from "react";
import Title from "./Title";
import aboutImg from "../assets/about.jpeg";
import { Button } from "antd";

const AboutMe = () => {
  return (
    <div className="px-28 my-20">
      <Title title="About" subTitle="Me" />
      <div className="grid grid-cols-2 gap-x-8 mb-0">
        <div className="relative before:border-8 before:absolute before:border-[#2caeba] before:w-[100%] before:h-full before:-top-6 before:-left-6">
          <img className="relative" src={aboutImg} alt="awesome beach" />
        </div>
        <article className="about-info">
          <p className="text-3xl capitalize font-bold">
            explore the difference
          </p>
          <p className="my-3 text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p className="my-3 text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <Button className="capitalize bg-[#2caeba] ">read more</Button>
        </article>
      </div>
    </div>
  );
};

export default AboutMe;
