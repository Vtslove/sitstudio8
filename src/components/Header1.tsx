import {
  FunctionComponent,
  useState,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import PopupMega from "./PopupMega";
import PortalPopup from "./PortalPopup";
import styles from "./styles/Header1.module.css";

export type Header1Type = {
  /** Style props */
  navbarTestingBackgroundImage?: CSSProperties["backgroundImage"];
};

const Header1: FunctionComponent<Header1Type> = ({
  navbarTestingBackgroundImage,
}) => {
  const [isPopupMegaOpen, setPopupMegaOpen] = useState(false);
  const header1Style: CSSProperties = useMemo(() => {
    return {
      backgroundImage: navbarTestingBackgroundImage,
    };
  }, [navbarTestingBackgroundImage]);

  const openPopupMega = useCallback(() => {
    setPopupMegaOpen(true);
  }, []);

  const closePopupMega = useCallback(() => {
    setPopupMegaOpen(false);
  }, []);

  return (
    <>
      <section className={styles.header} style={header1Style}>
        <div className={styles.navbarTesting}>
          <h2 className={styles.sitStudio}>sit studio</h2>
          <div className={styles.navbarTesting1}>
            <h2 className={styles.menu} onClick={openPopupMega}>
              menu
            </h2>
          </div>
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

export default Header1;
