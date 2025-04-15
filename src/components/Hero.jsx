import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className=" max-container padding-container flex flex-col gap-20 py-20 pb-32 md:gap-28 lg:flex-row">
      <div className="hero-map"></div>

      {/* LEFT */}
      <div className=" relative z-20 flex flex-1 flex-col xl:w-1/2">
        <img
          src="/camp.svg"
          width={50}
          height={50}
          className="absolute left-[-3px] w-10 lg:w-[50px] top-[-45px]"
        />
        <h1 className="bold-52 lg:bold-58">Putuk Truno Camp Area</h1>
        <p className="reguar-16 text-gray-50 mt-6 xl:w-max-[520px]">
          We want to be on each of your journeys seeking the satisfaction
          ofseeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(13)
              .map((_, index) => (
                <>
                  <img src="star.svg" key={index} />
                </>
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198K
            <span className="regular-16 lg:regular-20 ml-2">
              Excellent Reviews
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-3 w-full lg:flex-row">
          <Button type="button" variant="btn_green" title="DownLoad  Now" />
          <Button
            type="button"
            variant="btn_white_text"
            icon="/play.svg"
            title="How We Work?"
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <img src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <h1 className="text-white font-extrabold">Auguas Calientes</h1>
            <div className="mt-5 flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 text-gray-20">Distance</p>
                <h1 className="font-extrabold text-white text-lg">173.28 mi</h1>
              </div>
              
              <div className="flex flex-col">
                <p className="regular-16 text-gray-20">Elevation</p>
                <h1 className="font-extrabold text-white text-lg">2.040 km</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
