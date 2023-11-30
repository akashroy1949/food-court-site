import Image from "next/image";
import SectionHeaders from "./SectionHeaders";
import MenuItem from "../menu/MenuItem";

export default function HomeMenu() {
  return (
    <>
      <section id="homemenu" className="">
        {/* Spinach Images */}
        <div className="absolute left-0 right-0 justify-start">
          {/* Left Image */}
          <div className="absolute left-0 -top-[25px] text-left">
            <Image
              src={"/Images/spinach-left.png"}
              alt="Pizza salad left Image"
              width={546 / 4}
              height={607}
            />
          </div>

          {/* Right Image */}
          <div className="absolute right-0 -top-[25px]">
            <Image
              src={"/Images/spinach-right.png"}
              alt="Pizza salad Right Image"
              width={546 / 4}
              height={607}
            />
          </div>
        </div>

        {/* Section2 - Home Menu Header Text */}
        <div className="text-center py-8">
          <SectionHeaders subHeader={"check out"} mainHeader={"Menu"} />
        </div>

        {/* Section 2 - Menu Grid */}
        <div className=" grid grid-cols-3 gap-4">
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>   
        </div>
      </section>
    </>
  );
}
