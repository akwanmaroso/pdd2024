import Image from "next/image";

const Partners = () => {
  return (
    <div
      className="bg-primaryBlack-800 bg-opacity-[0.4] my-12 py-16"
      id="partners"
    >
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-3xl font-bold md:text-5xl">
          Our <span className="text-sky-500">Partners</span>
        </h2>
      </div>
      <div className="space-y-6">
        <div className="flex flex-col items-center px-2">
          <div className="my-4 flex flex-col items-center justify-center">
            <p className="text-lg lg:text-xl">Sponsorship</p>
          </div>
          <Image
            src="/assets/partners/sponsor.png"
            alt="sponsor"
            width="200"
            height="200"
            className="w-[200px] lg:w-[400px]"
          />
        </div>
        <div className="flex flex-col items-center px-2">
          <div className="my-4 flex flex-col items-center justify-center">
            <p className="text-lg lg:text-xl">Media Partners</p>
          </div>
          <Image
            src="/assets/partners/media.png"
            alt="media"
            width="200"
            height="200"
            className="w-[600px] lg:w-[600px]"
          />
        </div>
      </div>
    </div>
  );
};
export default Partners;
