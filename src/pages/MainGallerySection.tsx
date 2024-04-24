import { FunctionComponent,useState,useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MainGalleryComponent from "../components/MainGalleryComponent";

const MainGallerySection: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/linkedin-learning");
  }, [navigate]);

  return (
    <div className="w-full relative bg-black1 overflow-hidden flex flex-col items-center justify-start py-[42px] px-6 box-border tracking-[normal] mq640:gap-[21px_42px]" style={{marginTop: "-15%", padding: "4.5%" }}>
      <section className="self-stretch flex flex-row flex-wrap items-end justify-center gap-[24px_22px] max-w-full">
        <MainGalleryComponent image="/image@99x.webp" />
      
         <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[320px] max-w-full text-left text-xl text-white font-body-text">
         <video
            className="self-stretch flex-1 relative bg-cover bg-no-repeat bg-[top] object-contain z-[2]"
            autoPlay
            muted
            loop
          >
            <source src="https://rr3---sn-4g5edndl.googlevideo.com/videoplayback?expire=1713964470&ei=VrEoZsSGLcrZ6dsP3Iy_iAw&ip=31.148.23.146&id=o-AGl6SXGa8l1l6jmTU-__683gZ9O5-vDePFPex9kUvNdu&itag=308&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C298%2C299%2C302%2C303%2C308%2C315&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AWRWj2SXyWZmMO50vyfuW1ZX7UFFccIFVLez2cLQ0LAW4M7uH5mitTh3XG1WQCCiS4JvgyGXn2k_w_Xo&spc=UWF9f088xJL2bAfk5DkMLQFU6UEOzTx6Q1Nk1sOHX5qtF3DuVhlTkcPXz9x2&vprv=1&svpuc=1&mime=video%2Fwebm&ns=2WTl1gothAzUzdDso-51_RoQ&gir=yes&clen=15953827&dur=34.999&lmt=1709738917492768&keepalive=yes&c=WEB&sefc=1&txp=6219224&n=PjPvauqYb9P8vw&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgefIsKOR1cNP--g9nxag3vDGCkT64MUl5OrhEA4OvECwCIQC60J0K7VvflKjvGCl5G-cUAjtAE7lNPtDOdCgBoHvZjQ%3D%3D&redirect_counter=1&cm2rm=sn-3c2leek&req_id=a1397678e54ca3ee&cms_redirect=yes&cmsv=e&mh=Lv&mip=178.214.255.183&mm=34&mn=sn-4g5edndl&ms=ltu&mt=1713942684&mv=u&mvi=3&pl=22&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AHWaYeowRQIhANf9uUK7VyNKhCH8R6ZJHugcTqkAUETmdvneZvuwH4fiAiBr3QIsP5Km-yE_mBmZinH6VSVPSut0uMqin35tW7Eb2Q%3D%3D" />
          </video>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch relative leading-[30px] font-semibold mq450:text-base mq450:leading-[24px] cursor-pointer" onClick={onImageClick}>
          Linkedin Learning Animation Project
        </div>
        <div className="self-stretch relative text-mid leading-[27px] cursor-pointer" onClick={onImageClick}>
          Study, UI/UX, Presentation
        </div>
      </div>
    </div>
      </section>
      
    </div>
  );
};

export default MainGallerySection;
