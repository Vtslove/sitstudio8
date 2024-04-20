import { FunctionComponent, useState, useCallback } from "react";
import PopupMega from "./PopupMega";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import Component from "./Component";
import styles from "./styles/CorruptedHeader.module.css";
import MainGallerySection from "../pages/MainGallerySection";

const CorruptedHeader: FunctionComponent = () => {
  const [isPopupMegaOpen, setPopupMegaOpen] = useState(false);
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/linkedin-learning");
  }, [navigate]);

  const openPopupMega = useCallback(() => {
    setPopupMegaOpen(true);
  }, []);

  const closePopupMega = useCallback(() => {
    setPopupMegaOpen(false);
  }, []);

  const onImage2Click = useCallback(() => {
    navigate("/sntl");
  }, [navigate]);

  const onImage3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <section className={styles.corruptedHeader}>
        <div className={styles.header}>
          <header className={styles.navbar}>
            <div className={styles.navbarTesting}>
              <h2 className={styles.sitStudio} onClick={onImage3Click}>sit studio</h2>
              <h2 className={styles.menu} onClick={openPopupMega}>
                menu
              </h2>
            </div>
          </header>
          <img
            className={styles.headerBackgroundIcon}
            alt=""
            src="/header-background@2x.webp"
          />
          <MainGallerySection></MainGallerySection>
        </div>
      </section>
      {isPopupMegaOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupMega}
        >
          <PopupMega onClose={closePopupMega} />
        </PortalPopup>
      )}
    </>
  );
};

export default CorruptedHeader;
