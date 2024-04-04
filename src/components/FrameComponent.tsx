import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Component from "./Component";
import Footer from "./Footer";
import styles from "./styles/FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/games");
  }, [navigate]);

  const onImage2Click = useCallback(() => {
    navigate("/real-estate");
  }, [navigate]);

  return (
    <section className={styles.gallerySectionactualScaleParent}>
      <div className={styles.gallerySectionactualScale}>
        <div className={styles.cardsSection}>
          <Component
            image="/image-21@2x.png"
            linkedInLearningAnimatedP="Rirnitaitis concept"
            uIUXProductDevelopment="Concept, illustration"
            propHeight="unset"
            propPadding="unset"
            propHeight1="unset"
            onImage1Click={onImageClick}
            imageIconFlex="1"
            imageIconMaxHeight="100%"
          />
          <Component
            image="/image-3@2x.png"
            linkedInLearningAnimatedP="Coingrig Wallet"
            uIUXProductDevelopment="UI/UX, Presentation, Product Development"
            propHeight="unset"
            propPadding="unset"
            propHeight1="unset"
            onImage1Click={onImage2Click}
            imageIconFlex="1"
            imageIconMaxHeight="100%"
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default FrameComponent;
