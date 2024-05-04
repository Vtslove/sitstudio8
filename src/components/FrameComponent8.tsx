import { FunctionComponent } from "react";
import styles from "./styles/FrameComponent8.module.css"

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.mainInfoWrapper}>
    <div className="w-[1832px] flex flex-row items-start justify-start pt-0 px-[21px] pb-2.5 box-border max-w-full text-left text-xl text-shades-0 font-inter">
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1575:flex-wrap">
        <div className="w-[500px] bg-gray-100 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[35px] px-[22px] pb-[38px] box-border gap-[21px] max-w-full mq825:pt-[23px] mq825:pb-[25px] mq825:box-border">
          <div className="w-[443px] flex flex-col items-start justify-start gap-[182px] max-w-full mq450:gap-[91px]">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
              <b className="relative leading-[24px] mq450:text-base mq450:leading-[19px]">
                DEVELOPMENT
              </b>
              <img
                className="h-20 w-20 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/developmenttncsvg.svg"
              />
            </div>
            <h1 className="m-0 relative text-29xl leading-[48px] font-normal font-inherit mq450:text-10xl mq450:leading-[29px] mq825:text-19xl mq825:leading-[38px]">
              UX/UI
            </h1>
          </div>
          <h1 className="m-0 w-[433px] relative text-29xl leading-[48px] font-normal font-inherit flex items-center max-w-full mq450:text-10xl mq450:leading-[29px] mq825:text-19xl mq825:leading-[38px]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">EMAIL</p>
              <p className="m-0">MARKETING</p>
            </span>
          </h1>
        </div>
        <div className="w-[500px] bg-gray-100 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[35px] pb-[38px] pr-1.5 pl-[22px] box-border gap-[181.8px] max-w-full mq450:gap-[45px] mq825:gap-[91px] mq825:pt-[23px] mq825:pb-[25px] mq825:box-border">
          <div className="w-[443px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
            <b className="relative leading-[24px] inline-block min-w-[107px] mq450:text-base mq450:leading-[19px]">
              BRANDING
            </b>
            <img
              className="h-[80.2px] w-20 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/backwards-arrows.svg"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[21px] text-29xl">
            <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-normal font-inherit mq450:text-10xl mq450:leading-[29px] mq825:text-19xl mq825:leading-[38px]">
              STRATEGY
            </h1>
            <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-normal font-inherit mq450:text-10xl mq450:leading-[29px] mq825:text-19xl mq825:leading-[38px]">
              <p className="m-0">IDENTITY</p>
              <p className="m-0">CONSULTANCY</p>
            </h1>
          </div>
        </div>
        <div className="w-[500px] bg-gray-100 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[35px] px-[22px] pb-[38px] box-border gap-[182.2px] max-w-full mq825:gap-[91px] mq825:pt-[23px] mq825:pb-[25px] mq825:box-border">
          <div className="w-[443px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
            <b className="relative leading-[24px] inline-block min-w-[100px] mq450:text-base mq450:leading-[19px]">
              CONTENT
            </b>
            <img
              className="h-[79.8px] w-20 relative overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/blocky-arrows.svg"
            />
          </div>
          <div className="w-20 h-20 relative hidden" />
          <div className="flex flex-col items-start justify-start gap-[21px] max-w-full text-29xl">
            <h1 className="m-0 relative text-inherit leading-[48px] font-normal font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[29px] mq825:text-19xl mq825:leading-[38px]">
              DEVELOPMENT
            </h1>
            <h1 className="m-0 relative text-inherit leading-[48px] font-normal font-inherit mq450:text-10xl mq450:leading-[29px] mq825:text-19xl mq825:leading-[38px]">
              <p className="m-0">{`PHOTO & VIDEO`}</p>
              <p className="m-0">PRODUCTION</p>
            </h1>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default FrameComponent;
