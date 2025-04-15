import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <img src="/camp.svg" alt="camp" height={50} width={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-500 ">
          We are here for you
        </p>
        <div className="flex w-full flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[500px]">
            Guide You To Easy Path
          </h2>

          <p className="regualr-16 text-gray-30 xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, becuase we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain .{" "}
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <img
          className="w-full object-cover object-center 2xl:rounded-5xl"
          src="/boat.png"
          alt="Orange_Boat_2025_"
          width={1440}
          height={580}
        />
        <div className="absolute flex bg-white pr-7 pl-7 py-8 gap-3 rounded-3xl border shadow-md md:left-[5%] 2xl:top-20">
          <img
            className="h-full w-auto"
            src="/meter.svg"
            alt="Meter"
            width={16}
            height={158}
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="regualr-16 text-green-500">48Min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Claientes</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start Track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Wonorejo Pasuruan
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
