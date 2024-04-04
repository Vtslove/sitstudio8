import { FunctionComponent } from "react";
import Header1 from "../components/Header1";
import FrameComponent5 from "../components/FrameComponent5";
import HeaderFooter from "../components/HeaderFooter";
import styles from "./SmartCity.module.css";

const SmartCity: FunctionComponent = () => {
  return (
    <div className={styles.smartCity}>
      <Header1 navbarTestingBackgroundImage="url('/header@3x.png')" />
      <FrameComponent5 sNTLCurrencyWallet="smart city project" />
      <div className={styles.latestWork}>Latest work</div>
      <section className={styles.headerNavbarTestingSiteStu}>
        <div className={styles.cardsSection}>
          <div className={styles.component12}>
            <img
              className={styles.figureXverseBrandGuidelin}
              loading="lazy"
              alt=""
              src="/figure--xversebrandguidelinesjpg3@2x.png"
            />
          </div>
          <div className={styles.component13}>
            <img
              className={styles.figureXverse3jpg}
              loading="lazy"
              alt=""
              src="/figure--xverse3jpg3@2x.png"
            />
          </div>
        </div>
      </section>
      <section className={styles.headerNavbarTestingSiteStu1}>
        <div className={styles.cardsSection1}>
          <div className={styles.component121}>
            <img
              className={styles.figureXverseBrandGuidelin1}
              loading="lazy"
              alt=""
              src="/figure--xversebrandguidelinesjpg-13@2x.png"
            />
          </div>
          <div className={styles.component131}>
            <img
              className={styles.figureXverse3jpg1}
              loading="lazy"
              alt=""
              src="/figure--xverse3jpg-12@2x.png"
            />
          </div>
        </div>
      </section>
      <HeaderFooter
        propHeight="77px"
        propPadding="0px 0px var(--padding-19xl)"
      />
    </div>
  );
};

export default SmartCity;
