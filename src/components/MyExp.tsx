import React from "react";
import Title from "./Title";
import { services } from "../data";

const MyExp = () => {
  return (
    <div className="bg-white py-20">
      <Title title="personal" subTitle="experience" />
      <div className="px-36 grid grid-cols-3 gap-8">
        {services.map((service) => (
          <article className="items-center flex">
            <span className="flex p-2 text-3xl w-20 h-full items-center justify-center bg-[#2caeba] rounded-lg">
              <i>{service.icon}</i>
            </span>
            <div className="pl-4">
              <h4 className="mb-2 text-xl font-semibold capitalize">
                {service.title}
              </h4>
              <p className="max-w-[320%] ml-auto mr-auto">{service.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default MyExp;
