import { CalendarIcon, MapPin } from "lucide-react";
import React from "react";

const Venue = () => {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2 text-sm md:text-base">
        <MapPin />
        Palu, Indonesia
      </div>
      <div className="flex items-center gap-2 text-sm md:text-base">
        <CalendarIcon />
        November, 30th 2024
      </div>
    </div>
  );
};

export default Venue;
