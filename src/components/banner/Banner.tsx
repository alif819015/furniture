// import bannerImg from "../../app/assets/Mask Group.jpg";
import bannerImg from "@/app/assets/Mask Group.jpg";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative flex flex-col ">
      <Image
        className=" "
        src={bannerImg}
        alt="Banner Image"
        objectFit="cover"
      />
      <div className="w-full lg:w-[643px]  lg:h-[443px]  lg:absolute right-[90px] lg:top-1/2 lg:translate-y-[-50%] rounded-[10px] bg-[#DFE9F4]">
        <div className="p-10 lg:p-16">
          <p className="font-[600]">New Arrival</p>
          <h5 className="text-[#054C73] text-4xl md:text-5xl lg:text-[53px] font-[700] leading-[65px]">
            Discover Our New Collection
          </h5>
          <p className="lg:text-[18px] font-[500] leading-[39px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="px-[50px] lg:px-[72px] py-[14px] lg:py-[25px] font-[700] uppercase rounded-full text-white bg-[#054C73] mt-[30px]">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
