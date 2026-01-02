import Image from "next/image";

const About = () => {
  return (
    <div className="bg-primaryBlack-800 bg-opacity-[0.4] my-10">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex items-center justify-center gap-8 max-md:flex-wrap md:items-start md:justify-between">
          <div className="flex shrink-0 items-center gap-8 md:basis-[30%]">
            <Image
              src="/assets/logos/ic_pdd26.svg"
              alt="pdd-2024-logo"
              width={42}
              height={42}
              className="h-32 w-32 md:h-28 md:w-28"
            />
            <Image
              src="/assets/logos/ic_hmc.svg"
              alt="pdd-2024-logo"
              width={42}
              height={42}
              className="h-32 w-32 md:h-28 md:w-28"
            />
          </div>
          <div className="md:basis-[70%]">
            <p className="text-center leading-7 md:text-left">
              <span className="text-sky-400 italic">
                Palu Developer Day 2024
              </span>{" "}
              aims to inspire the young generation of Palu City in the field of
              software engineering and technological creativity. The event
              brings together professionals and industry experts to share
              knowledge and the latest trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
