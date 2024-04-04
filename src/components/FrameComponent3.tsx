import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./styles/FrameComponent3.module.css";

export type FrameComponent3Type = {
  dEVELOPMENT?: string;
  developmentTNCsvg?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
  propHeight2?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propHeight3?: CSSProperties["height"];
  propHeight4?: CSSProperties["height"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  dEVELOPMENT,
  developmentTNCsvg,
  propHeight,
  propHeight1,
  propHeight2,
  propWidth,
  propHeight3,
  propHeight4,
}) => {
  const developmentBrandingContentStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const divelementorElementStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const divelementorWidgetContainerStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight2,
    };
  }, [propHeight2]);

  const dEVELOPMENTStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divelementorElement1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight3,
    };
  }, [propHeight3]);

  const divelementorWidgetContainer1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight4,
    };
  }, [propHeight4]);

  return (
    <div
      className={styles.developmentBrandingContent}
      style={developmentBrandingContentStyle}
    >
      <div
        className={styles.divelementorElement}
        style={divelementorElementStyle}
      >
        <div
          className={styles.divelementorWidgetContainer}
          style={divelementorWidgetContainerStyle}
        >
          <div className={styles.heading4}>
            <b className={styles.development} style={dEVELOPMENTStyle}>
              {dEVELOPMENT}
            </b>
          </div>
        </div>
      </div>
      <div
        className={styles.divelementorElement1}
        style={divelementorElement1Style}
      >
        <div
          className={styles.divelementorWidgetContainer1}
          style={divelementorWidgetContainer1Style}
        >
          <div className={styles.developmentTncsvg}>
            <div className={styles.developmentTncsvgFill}>
              <img
                className={styles.developmentTncsvgIcon}
                loading="lazy"
                alt=""
                src={developmentTNCsvg}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
