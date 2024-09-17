import Image from "next/image";
import img1 from "@/app/assets/Mask Group-1.png";
import img2 from "@/app/assets/Image-living room.png";
import img3 from "@/app/assets/Mask Group-2.png";
const BrowseTheRange = () => {
  return (
    <div className="py-20">
      <div className="text-center pb-10">
        <p className="font-[700] mb-2 text-[32px]">Browse The Range</p>
        <p className="text-[#666] text-[20px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 pt-10 justify-center items-center text-center">
        <div>
          <Image src={img1} alt="img1" />
          <p className="text-[24px] pt-3 font-[600]">Dining</p>
        </div>
        <div>
          <Image src={img2} alt="img1" />
          <p className="text-[24px] pt-3  font-[600]">Living</p>
        </div>
        <div>
          <Image src={img3} alt="img1" />
          <p className="text-[24px] pt-3  font-[600]">Bedroom</p>
        </div>
      </div>
    </div>
  );
};

export default BrowseTheRange;
