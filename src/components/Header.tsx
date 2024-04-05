import {
  FunctionComponent,
  useState,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import PopupMega from "./PopupMega";
import PortalPopup from "./PortalPopup";
import styles from "./styles/Header.module.css";

export type HeaderType = {
  /** Style props */
  navbarTestingBackgroundImage?: CSSProperties["backgroundImage"];
  navbarTestingMinHeight?: CSSProperties["minHeight"];
};

const Header: FunctionComponent<HeaderType> = ({
  navbarTestingBackgroundImage,
  navbarTestingMinHeight,
}) => {
  const [isPopupMegaOpen, setPopupMegaOpen] = useState(false);
  const headerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: navbarTestingBackgroundImage,
      minHeight: navbarTestingMinHeight,
    };
  }, [navbarTestingBackgroundImage, navbarTestingMinHeight]);

  const openPopupMega = useCallback(() => {
    setPopupMegaOpen(true);
  }, []);

  const closePopupMega = useCallback(() => {
    setPopupMegaOpen(false);
  }, []);

  const navigate = useNavigate();

  const onImage3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <section className={styles.header} style={headerStyle}>
        <div className={styles.navbarTesting}>
          <h2 className={styles.sitStudio} onClick={onImage3Click}>sit studio</h2>
          <div className={styles.menuWrapper}>
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

export default Header;
