import Banner from "@/components/banner/Banner";
import Navbar from "@/components/navbar/Navbar";

import BannerBottom from "@/components/banner/BannerBottom";
import InspirationCollection from "@/components/Inspiration Collection/InspirationCollection";
import { myFonts } from "./fonts/fonts";
import BeautifyYourSpace from "@/components/Beautify Your Space/BeautifyYourSpace";
import BrowseTheRange from "@/components/Browse The Range/BrowseTheRange";
import HowItWorks from "@/components/How It Works/HowItWorks"
import JoinOurMailingList from "@/components/Join Our Mailing List/JoinOurMailingList";
import Footer from "@/components/footer/Footer";
const Page = () => {
  console.log("object");
  return (
    <div className={`max-w-[1440px] mx-auto min-h-screen ${myFonts.className}`}>
      <Navbar />
      <Banner />
      <BannerBottom />
      <InspirationCollection />
      <BeautifyYourSpace />
      <BrowseTheRange />
      <HowItWorks />
      <JoinOurMailingList/>
      <Footer/>
    </div>
  );
};

export default Page;
