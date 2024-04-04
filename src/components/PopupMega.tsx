import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/PopupMega.module.css";

export type PopupMegaType = {
  onClose?: () => void;
};

const PopupMega: FunctionComponent<PopupMegaType> = ({ onClose }) => {
  const navigate = useNavigate();

  const onWorkTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onServicesTextClick = useCallback(() => {
    navigate("/services-responsive");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about-responsive");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/about-responsive");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onImageClick = useCallback(() => {
    navigate("/sntl");
  }, [navigate]);

  const onImage2Click = useCallback(() => {
    navigate("/sntl");
  }, [navigate]);

  const onImage3Click = useCallback(() => {
    navigate("/coingrig");
  }, [navigate]);

  const onImage4Click = useCallback(() => {
    navigate("/smart-city");
  }, [navigate]);

  const onWorkText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onServicesText1Click = useCallback(() => {
    navigate("/services-responsive");
  }, [navigate]);

  const onAboutText1Click = useCallback(() => {
    navigate("/about-responsive");
  }, [navigate]);

  const onContactText1Click = useCallback(() => {
    navigate("/about-responsive");
  }, [navigate]);

  const onHomeText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.popupMega}>
      <header className={styles.navbar} onClick={onClose}>
        <div className={styles.work} onClick={onWorkTextClick}>
          Work
        </div>
        <div className={styles.services} onClick={onServicesTextClick}>
          Services
        </div>
        <div className={styles.about} onClick={onAboutTextClick}>
          About
        </div>
        <div className={styles.contact} onClick={onContactTextClick}>
          Contact
        </div>
        <div className={styles.home} onClick={onHomeTextClick}>
          Home
        </div>
        <div className={styles.x} onClick={onClose}>
          X
        </div>
      </header>
      <section className={styles.gallerySection}>
        <div className={styles.latestWork}>Latest work</div>
        <div className={styles.cardsSection}>
          <div className={styles.component12}>
            <img
              className={styles.imageIcon}
              alt=""
              src="/image@2x.png"
              onClick={onImageClick}
            />
          </div>
          <div className={styles.component13}>
            <div className={styles.image} onClick={onImage2Click} />
          </div>
        </div>
      </section>
      <section className={styles.gallerySection1}>
        <div className={styles.cardsSection1}>
          <div className={styles.component121}>
            <img
              className={styles.imageIcon1}
              alt=""
              src="/image-11@2x.png"
              onClick={onImage3Click}
            />
          </div>
          <div className={styles.component131}>
            <div className={styles.image1} onClick={onImage4Click} />
          </div>
        </div>
      </section>
      <div className={styles.navbar1} onClick={onClose}>
        <div className={styles.work1} onClick={onWorkText1Click}>
          Work
        </div>
        <div className={styles.services1} onClick={onServicesText1Click}>
          Services
        </div>
        <div className={styles.about1} onClick={onAboutText1Click}>
          About
        </div>
        <div className={styles.contact1} onClick={onContactText1Click}>
          Contact
        </div>
        <div className={styles.home1} onClick={onHomeText1Click}>
          Home
        </div>
        <div className={styles.x1} onClick={onClose}>
          X
        </div>
      </div>
      <div className={styles.linkedinParent}>
        <div className={styles.linkedin}>LinkedIn</div>
        <div className={styles.behance}>Behance</div>
        <div className={styles.viewMore}>VIEW MORE</div>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/arrow-1.svg"
        />
      </div>
    </div>
  );
};

export default PopupMega;
