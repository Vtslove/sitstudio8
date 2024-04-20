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
            <source src="https://www.dropbox.com/scl/fi/1andtrxjln0kqwmv3i10k/LINKEDIN-LEARNING-ANIMATION-PROJECT-1440p.webm?rlkey=co58e9q396k9709jjjacdotxc&st=xtygqmlq&raw=1" />
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
