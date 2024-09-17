import Image from "next/image";
import img1 from "@/app/assets/IG-1.jpg";
import img2 from "@/app/assets/IG-2.jpg";
import img3 from "@/app/assets/IG-3.jpg";
import img4 from "@/app/assets/IG-4.jpg";
const Footer = () => {
  return (
    <div className="w-full px-20 flex flex-col lg:flex-row text-center lg:text-justify justify-center items-center py-10 pb-16 bg-[#03344F] text-white">
      <div className="w-full px-5 lg:w-[40%]">
        <p className="text-[24px] font-[700] pb-10">Beauty Care</p>
        <p className="leading-[35px]">
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <p className="text-[24px] font-[700]">Follow Us</p>
      </div>
      <div className="w-full px-5 lg:w-[60%] space-y-10 mt-10">
        <p className="text-[24px] font-[700]">Instagram Shop</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-5">
          <Image src={img1} className="mx-auto" alt="img1" />
          <Image src={img2} className="mx-auto" alt="img1" />
          <Image src={img3} className="mx-auto" alt="img1" />
          <Image src={img4} className="mx-auto" alt="img1" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
