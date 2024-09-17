import Image from "next/image";
import img1 from "@/app/assets/HIW1.jpeg";
import img2 from "@/app/assets/HIW2.png";
import img3 from "@/app/assets/HIW3.jpeg";

const HowItWorks = () => {
  return (
    <div className="py-20 border-t-2">

      <div className="text-center pb-10">
        <p className="font-[700] mb-2 text-[32px]">How It Works</p>
        <p className="text-[#666] text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 pt-10 justify-center items-center text-center">
        <div className="relative group  w-[381px]">
          <div className="w-[381px] h-[400px] relative  rounded-lg">
            <Image
              src={img1}
              alt="Dining"
              className="object-cover  rounded-2xl w-full h-full"
            />

            <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="w-9 font-bold h-9 text-white flex items-center justify-center bg-black rounded-full">
                1.
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[24px] pt-3 font-[600]">Purchase Securely</p>
            <p className="text-[18px] pt-2 text-[#666]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="relative group w-[381px]  ">
          <div className="w-[381px] h-[400px] relative  rounded-lg">
            <Image
              src={img2}
              alt="Living"
              className="object-cover rounded-2xl w-full h-full"
            />

            <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="w-9 font-bold h-9 text-white flex items-center justify-center bg-black rounded-full">
                2.
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[24px] pt-3 font-[600]">Ships From Warehouse</p>
            <p className="text-[18px] pt-2 text-[#666]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="relative group  w-[381px]">
          <div className="w-[381px] h-[400px] relative  rounded-lg">
            <Image
              src={img3}
              alt="Bedroom"
              className="object-cover rounded-2xl  w-full h-full"
            />

            <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="w-9 h-9 font-bold text-white flex items-center justify-center bg-black rounded-full">
                3.
              </div>
            </div>
          </div>
          <div className=" mt-4">
            <p className="text-[24px] pt-3 font-[600]">Style Your Room</p>
            <p className="text-[18px] pt-2 text-[#666]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
