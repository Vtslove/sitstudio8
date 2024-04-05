import { FunctionComponent, useMemo, type CSSProperties,useState, useCallback } from "react";
import styles from "./MainGalleryModule.module.css";
import { useNavigate } from "react-router-dom";

export type ComponentType = {
  image?: string;

  /** Style props */
  projectTitleHeight?: CSSProperties["height"];
  imageIconFlex?: CSSProperties["flex"];
  imageIconMaxHeight?: CSSProperties["maxHeight"];
};

const MainGalleryComponent: FunctionComponent<ComponentType> = ({
  image,
  projectTitleHeight,
  imageIconFlex,
  imageIconMaxHeight,
}) => {
  const navigate = useNavigate();

  const onImage2Click = useCallback(() => {
    navigate("/linkedin-learning");
  }, [navigate]);

  const onImageClick = useCallback(() => {
    navigate("/sntl");
  }, [navigate]);
  const imageIconStyle: CSSProperties = useMemo(() => {
    return {
      height: projectTitleHeight,
      flex: imageIconFlex,
      maxHeight: imageIconMaxHeight,
    };
  }, [projectTitleHeight, imageIconFlex, imageIconMaxHeight]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[320px] max-w-full text-left text-xl text-white font-body-text">
       <h1 className={styles.webDesignStudioContainer}>
            <p className={styles.webDesignStudio}>WEB<br/>DESIGN<br/> STUDIO</p>
          </h1>
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain cursor-pointer"
        loading="lazy"
        alt=""
        src={image}
        style={imageIconStyle}
        onClick={onImageClick}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div
        className="self-stretch relative leading-[30px] font-semibold mq450:text-base mq450:leading-[24px]">
          SNTL Wallet
        </div>
        <div className="self-stretch relative text-mid leading-[27px]">
         Finances, UI/UX
        </div>
      </div>
    </div>
  );
};

export default MainGalleryComponent;
