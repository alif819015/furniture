import img1 from "@/app/assets/Mask Group.png";
import img2 from "@/app/assets/Ellipse 5.png";
import Image from "next/image";

const BeautifyYourSpace = () => {
  return (
    <div className="w-full  flex justify-center items-center flex-col lg:flex-row bg-[#F2F5FF] relative">
      <div className="lg:w-1/2  p-10 flex justify-center items-center">
        <div className="lg:pl-20 ">
          <p className="text-[32px] font-[700]">Beautify Your Space</p>
          <p className="text-[20px] text-[#666] leading-[39px]">
            Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <button className="px-[50px] lg:px-[72px] py-[14px] lg:py-[25px] font-[700] uppercase rounded-full text-white bg-[#054C73] mt-[30px]">
          Learn More
          </button>
        </div>
      </div>
      <div className="w-[80%] sm:w-[60%] lg:w-1/2 p-10 lg:p-24 relative">
        <div className="relative w-full h-full">
          <div className="absolute inset-0">
            <Image
              src={img2}
              alt="img2"
              className="sm:w-[70%] lg:w-[80%] xl:w-full h-auto right-[-15%] top-[15%] absolute z-[1]"
              style={{ objectFit: "contain" }}
            />
          </div>

          <Image
            src={img1}
            alt="img1"
            className="relative w-full h-auto object-cover z-[2]"
          />
        </div>
      </div>
    </div>
  );
};

export default BeautifyYourSpace;
