import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent8";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ServicesResponsive: FunctionComponent = () => {
  return (
    <div>
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-start justify-start gap-[80px] leading-[normal] tracking-[normal] mq825:gap-[20px] mq1275:gap-[40px]">
      <Header />
      <FrameComponent />
    </div>
    <Footer/>
    </div>
  );
};

export default ServicesResponsive;
