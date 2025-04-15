import React from "react";
import Button from "./Button";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get For Free Now
          </h2>
          <p className="regualr-16 text-gray-10">
            Available On IOS and Android
          </p>
          <div className="flex flex-col w-full gap-5 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="DownLoad On IOS"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="DownLoad On AnDroid"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
            <img src="/phones.png" alt="Phones" height={870} width={550} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
