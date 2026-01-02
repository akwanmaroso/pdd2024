import { rundownLists } from "@/constants";

const Rundown = () => {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          Event <span className="text-sky-500">Agenda</span>
        </h2>
        <div className="flex w-full max-w-152 flex-col gap-4">
          {rundownLists.map((value, index) => (
            <div key={index} className="bg-primaryBlack-800 space-y-4 p-4">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg font-semibold text-sky-500">
                  {value.title}
                </h2>{" "}
                <div className="text-md">{value.timeline}</div>
              </div>
              <div className="flex items-center justify-between gap-12">
                <p className="text-sm">{value?.description}</p>
                <p className="text-sm font-thin italic">Terlaksana</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rundown;
