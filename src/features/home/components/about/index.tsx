import Image from "next/image";

const About = () => {
  return (
    <div className="bg-primaryBlack-800 my-10">
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="flex justify-between gap-8">
          <div className="flex items-center gap-8 shrink-0 basis-[30%]">
            <Image
              src="/assets/logos/ic_pdd24.svg"
              alt="pdd-2024-logo"
              width={42}
              height={42}
              className="md:w-28 md:h-28"
            />
            <Image
              src="/assets/logos/ic_hmc.svg"
              alt="pdd-2024-logo"
              width={42}
              height={42}
              className="md:w-28 md:h-28"
            />
          </div>
          <div className="basis-[70%]">
            <p className="leading-7">
              Palu Developer Day 2024 aims to inspire the young generation of Palu City in the field of software
              engineering and technological creativity. The event brings together professionals and industry experts to
              share knowledge and the latest trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
