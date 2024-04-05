import { FunctionComponent, useState, useCallback,  } from "react";
import PopupMega from "../components/PopupMega";
import PortalPopup from "../components/PortalPopup";
import FrameComponent4 from "../components/FrameComponent4";
import styles from "./ABOUTRESPONSIVE.module.css";
import { useNavigate } from "react-router-dom";

const ABOUTRESPONSIVE: FunctionComponent = () => {
  const [isPopupMegaOpen, setPopupMegaOpen] = useState(false);

  const openPopupMega = useCallback(() => {
    setPopupMegaOpen(true);
  }, []);

  const closePopupMega = useCallback(() => {
    setPopupMegaOpen(false);
  }, []);

  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className={styles.aboutResponsive}>
        <header className={styles.navbarTestingWrapper}>
          <div className={styles.navbarTesting}>
            <h2 className={styles.sitStudio} onClick={onAboutTextClick}>sit studio</h2>
            <div className={styles.menuWrapper}>
              <h2 className={styles.menu} onClick={openPopupMega}>
                menu
              </h2>
            </div>
          </div>
        </header>
        <FrameComponent4 />
      </div>
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

export default ABOUTRESPONSIVE;
