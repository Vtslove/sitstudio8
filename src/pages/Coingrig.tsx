import { FunctionComponent } from "react";
import Header1 from "../components/Header1";
import FrameComponent5 from "../components/FrameComponent5";
import HeaderFooter from "../components/HeaderFooter";
import styles from "./Coingrig.module.css";

const Coingrig: FunctionComponent = () => {
  return (
    <div className={styles.coingrig}>
      <Header1 navbarTestingBackgroundImage="url('/header@3x.png')" />
      <FrameComponent5 sNTLCurrencyWallet="coingrig wallet." />
      <div className={styles.latestWork}>Latest work</div>
      <section className={styles.coingrigHeader}>
        <div className={styles.cardsSection}>
          <div className={styles.component12}>
            <img
              className={styles.figureXverseBrandGuidelin}
              loading="lazy"
              alt=""
              src="/figure--xversebrandguidelinesjpg2@2x.png"
            />
          </div>
          <div className={styles.component13}>
            <img
              className={styles.figureXverse3jpg}
              loading="lazy"
              alt=""
              src="/figure--xverse3jpg2@2x.png"
            />
          </div>
        </div>
      </section>
      <section className={styles.coingrigHeader1}>
        <div className={styles.cardsSection1}>
          <div className={styles.component121}>
            <img
              className={styles.figureXverseBrandGuidelin1}
              loading="lazy"
              alt=""
              src="/figure--xversebrandguidelinesjpg-12@2x.png"
            />
          </div>
          <div className={styles.component131}>
            <img
              className={styles.figureXverse3jpg1}
              loading="lazy"
              alt=""
              src="/figure--xverse3jpg-11@2x.png"
            />
          </div>
        </div>
      </section>
      <HeaderFooter />
    </div>
  );
};

export default Coingrig;
