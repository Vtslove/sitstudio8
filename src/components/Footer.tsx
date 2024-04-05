import { FunctionComponent, useCallback, useMemo } from "react";
import styles from "./styles/Footer.module.css";
import { useNavigate } from "react-router-dom";

const Footer: FunctionComponent = () => {
  const onSocialLinkClick = useCallback(() => {
    window.open("https://www.tiktok.com/@sitstudio");
  }, []);
  const onSocialLink2Click = useCallback(() => {
    window.open("https://www.youtube.com/@sitstudio88");
  }, []);

  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/about-responsive");
  }, [navigate]);

  const onAboutText2Click = useCallback(() => {
    navigate("/sntl");
  }, [navigate]);

  const onAboutText3Click = useCallback(() => {
    navigate("/coingrig");
  }, [navigate]);

  const onAboutText4Click = useCallback(() => {
    navigate("/linkedin-learning");
  }, [navigate]);

  const onAboutText5Click = useCallback(() => {
    navigate("/smart-city");
  }, [navigate]);

  const onAboutText6Click = useCallback(() => {
    navigate("/services-responsive");
  }, [navigate]);

  const onAboutText7Click = useCallback(() => {
    navigate("/about-responsive");
  }, [navigate]);

  const onAboutText8Click = useCallback(() => {
    navigate("/services-responsive");
  }, [navigate]);

  const onAboutText9Click = useCallback(() => {
    navigate("/services-responsive");
  }, [navigate]);
  return (
    <div className={styles.footer}>
      <div className={styles.moscowStBolotnikovskaya}>
        117638, Moscow, st. Bolotnikovskaya, 30 sq. 24
      </div>
      <div className={styles.sitStudioWrapper}>
        <div className={styles.sitStudio}>sit studio</div>
      </div>
      <div className={styles.catalogParent}>
        <div className={styles.catalog}>Catalog</div>
        <div className={styles.eswtParent}>
          <div className={styles.eswt} onClick={onAboutText2Click}>SNTL</div>
          <div className={styles.hilt} onClick={onAboutText3Click}>COINGRIG</div>
          <div className={styles.skinIq} onClick={onAboutText4Click}>LINKEDIN</div>
          <div className={styles.rehabSimulators} onClick={onAboutText5Click}>SMART CITY</div>
        </div>
      </div>
      <div className={styles.servicesParent}>
        <div className={styles.services}>Services</div>
        <div className={styles.orderDesignParent}>
          <div className={styles.orderDesign} onClick={onAboutText6Click}>Order Design</div>
          <div className={styles.consultation} onClick={onAboutText7Click}>Consultation</div>
        </div>
      </div>
      <div className={styles.aboutParent}>
        <div className={styles.about}>About</div>
        <div className={styles.aboutUsParent}>
          <div className={styles.aboutUs} onClick={onAboutText8Click}>About Us</div>
          <div className={styles.news} onClick={onAboutText9Click}>News</div>
        </div>
      </div>
      <div className={styles.getInTouchWrapper}>
        <div className={styles.getInTouch} onClick={onAboutTextClick}>Get In Touch</div>
      </div>
      <div className={styles.socials}>
        <div className={styles.icons8Tiktok1Wrapper}>
          <img
            className={styles.icons8Tiktok1}
            alt=""
            src="/icons8tiktok-1.svg"
            onClick={onSocialLinkClick}
          />
        </div>
        <div className={styles.icons8Youtube1Wrapper}>
          <img
            className={styles.icons8Youtube1}
            alt=""
            src="/icons8youtube-1.svg"
            onClick={onSocialLink2Click}
          />
        </div>
      </div>
      <div className={styles.contacts}>
        <div className={styles.contactsChild} />
        <div className={styles.div}>+7 (999) 400 67 10</div>
        <div className={styles.sitstudiomailgmailcom}>
          sitstudiomail@gmail.com
        </div>
      </div>
      <div className={styles.sitStudioAllContainer}>
        <p className={styles.sitStudio1}>© 2024 — sit studio</p>
        <p className={styles.allRightsReserved}>All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
