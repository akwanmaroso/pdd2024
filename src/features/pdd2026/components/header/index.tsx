import { Calendar, MapPin } from "lucide-react";

const Header = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center justify-center px-5 py-24">
      <div className="space-y-6 text-center">
        <div className="inline-block">
          <span className="rounded-full bg-linear-to-r from-sky-500 to-blue-500 px-4 py-2 text-sm font-semibold text-white">
            Coming Soon
          </span>
        </div>

        <h1 className="text-4xl leading-tight font-bold md:text-6xl">
          <span className="bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            Palu Developer Day
          </span>
          <br />
          <span className="text-5xl text-white md:text-7xl">2026</span>
        </h1>

        <p className="mx-auto max-w-3xl text-xl text-blue-200 md:text-2xl">
          The Biggest Community-Led Developer Conference in Palu City
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-4 md:gap-8">
          <div className="flex items-center gap-2 text-sky-300">
            <Calendar className="h-5 w-5" />
            <span className="text-sm md:text-base">2026</span>
          </div>
          <div className="flex items-center gap-2 text-sky-300">
            <MapPin className="h-5 w-5" />
            <span className="text-sm md:text-base">Palu City</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
