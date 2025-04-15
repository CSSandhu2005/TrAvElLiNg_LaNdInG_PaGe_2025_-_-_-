import React from "react";
import { PEOPLE_URL } from "../../constants/constants";
interface CampSiteProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}
const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampSiteProps) => (
  <div
    className={`relative h-full w-full z-40 min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
  >
    <div className="absolute left-[30px] top-[15px] xl:left-[55px] xl:top-[30px] flex items-center gap-2 text-white">
      <div className="bg-green-500 p-2.5 rounded-full">
        <img src="/folded-map.svg" alt="folded-map-svg" />
      </div>
      <div>
        <h1 className="font-extrabold text-sm">{title}</h1>
        <p className="text-xs">{subtitle}</p>
      </div>
    </div>
    <div className="absolute left-[30px] bottom-[15px] xl:left-[55px] xl:bottom-[30px] flex items-center gap-3">
      <span className="-space-x-4">
        {PEOPLE_URL.map((image) => (
          <img
            className="inline-block h-10"
            src={image}
            alt="memebers-joined-photo"
          />
        ))}
      </span>
      <p className="text-white bold-16 md:bold-20">
        {peopleJoined}
      </p>
    </div>
  </div>
);

const Camp = () => {
  return (
    <section className="py-10 2xl:max-container flex flex-col lg:mb-10 lg:py-52 xl:mb-20">
      <div
        className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8
        overflow-x-auto lg:h-[400px] xl:h-[640px]"
      >
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View"
          subtitle="SomeWhere In The WilderNess"
          peopleJoined="50+ Joined"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6 z-50">
        <div className="relative overflow-clip bg-green-500 p-9 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20  w-full rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className='regular-16 xl:regular-16 mt-5 text-white'> Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventrue.</p>
        <img src="/quote.svg" alt="camp-2" width={186} height={219} className='absolute top-5 right-5'/>
        </div>
      </div>
    </section>
  );
};

export default Camp;
