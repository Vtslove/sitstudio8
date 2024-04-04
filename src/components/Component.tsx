import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./styles/Component.module.css"

export type ComponentType = {
  image?: string;
  linkedInLearningAnimatedP?: string;
  uIUXProductDevelopment?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propPadding?: CSSProperties["padding"];
  propHeight1?: CSSProperties["height"];
  imageIconFlex?: CSSProperties["flex"];
  imageIconMaxHeight?: CSSProperties["maxHeight"];

  /** Action props */
  onImage1Click?: () => void;
};

const Component: FunctionComponent<ComponentType> = ({
  image,
  linkedInLearningAnimatedP,
  uIUXProductDevelopment,
  propHeight,
  propPadding,
  propHeight1,
  onImage1Click,
  imageIconFlex,
  imageIconMaxHeight,
}) => {
  const component13Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
    };
  }, [propHeight, propPadding]);

  const imageIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      flex: imageIconFlex,
      maxHeight: imageIconMaxHeight,
    };
  }, [propHeight1, imageIconFlex, imageIconMaxHeight]);

  return (
    <div className={styles.component13} style={component13Style}>
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src={image}
        onClick={onImage1Click}
        style={imageIconStyle}
      />
      <div className={styles.titleDescription}>
        <div className={styles.linkedinLearningAnimated}>
          {linkedInLearningAnimatedP}
        </div>
        <div className={styles.uiuxProductDevelopment}>
          {uIUXProductDevelopment}
        </div>
      </div>
    </div>
  );
};

export default Component;
