import { speakerLists } from "@/constants";
import Card from "./card";
import TitleSection from "./title-section";

const Speakers = () => {
  return (
    <div id="speakers" className="mx-auto max-w-6xl px-5 py-24">
      <div className="space-y-6">
        <TitleSection />
        <div className="flex w-full flex-col items-center justify-center gap-14 lg:flex-row">
          {speakerLists.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
