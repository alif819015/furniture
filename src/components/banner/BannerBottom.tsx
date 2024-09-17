import Img1 from "@/app/assets/Group-1.svg";
import Img2 from "@/app/assets/Group.svg";
import Img3 from "@/app/assets/bannerbtn3.png";
import Image from "next/image";
const BannerBottom = () => {
  return (
    <div className="flex justify-between  flex-col lg:flex-row lg:h-[150px] items-center bg-[#F2F5FF] px-20 py-10 gap-4">
      <div className="flex items-center  flex-col  lg:flex-row   gap-4 ">
        <div>
          <Img1 />
        </div>
        <div>
          <p className="text-[24px] font-semibold">Free Delivery</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="flex items-center   flex-col  lg:flex-row    gap-4">
        <div>
          <Img2 />
        </div>
        <div>
          <p className="text-[24px] font-semibold">Support 24/7</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="flex items-center   flex-col lg:flex-row  gap-4">
        <div>
          <Image src={Img3} alt="safe" />
        </div>
        <div>
          <p className="text-[24px] font-semibold">100% Authentic</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
