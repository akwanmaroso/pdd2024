import { SpeakerList } from "@/types";
import Image from "next/image";
import React, { FC } from "react";

const Card: FC<{ data: SpeakerList }> = ({ data }) => {
  return (
    <div>
      <div className="flex w-full flex-col items-center space-y-4 p-2">
        <Image
          src={data.img}
          alt={data.name}
          width={240}
          height={240}
          className="h-40 w-40 rounded-full object-cover"
        />
        <div className="flex flex-col items-center gap-1">
          <p className="font-semibold text-white md:text-xl">{data.name}</p>
          <p className="text-sm text-white">{data.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
