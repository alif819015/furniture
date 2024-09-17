import Image from "next/image";
import img1 from "@/app/assets/inspiration1.jpeg";
import img2 from "@/app/assets/Mask Group.jpg";
import img3 from "@/app/assets/inspiration3.jpeg";
const InspirationCollection = () => {
  return (
    <div className="py-20">
      <div className="text-center pb-20">
        <h3 className="text-[32px] font-[700]">Inspiration Collection</h3>
        <p className="text-[#666] text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex gap-6 xl:gap-10 2xl:gap-14  flex-col justify-center items-center lg:flex-row">
        <div className="w-full object-cover object-center min-w-[390px]  sm:w-[400px] lg:w-[300px]  h-[500px]">
          <Image
            className="mx-auto w-full h-full  rounded-tl-[120px] "
            src={img1}
            alt="style your room"
          />
        </div>
        <div className="w-full  object-cover   min-w-[360px]  sm:w-[400px] xl:w-[300px] h-[500px] object-center ">
          <Image className="mx-auto  w-full h-full " src={img2} alt="img 2" />
        </div>
        <div className=" bg-[#dde1e4] w-full   rounded-br-[120px] min-w-[360px]  sm:w-[400px] xl:w-[300px] object-cover h-[500px]">
          <Image
            className="mx-auto  w-[128px] "
            src={img3}
            alt="style your room"
          />
        </div>
      </div>
    </div>
  );
};

export default InspirationCollection;
