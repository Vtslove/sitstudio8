import { FunctionComponent } from "react";
import Header1 from "../components/Header1";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import styles from "./SNTL.module.css";

const SNTL: FunctionComponent = () => {
  return (
    <div className={styles.sntl}>
      <Header1 />
      <FrameComponent5 sNTLCurrencyWallet="SNTL Currency wallet." />
      <div className={styles.latestWork}>Latest work</div>
      <section className={styles.navbarTesting}>
        <div className={styles.cardsSection}>
          <div className={styles.component12}>
            <img
              className={styles.figureXverseBrandGuidelin}
              loading="lazy"
              alt=""
              src="/figure--xversebrandguidelinesjpg1@2x.png"
            />
          </div>
          <div className={styles.component13}>
            <img
              className={styles.figureXverse3jpg}
              loading="lazy"
              alt=""
              src="/figure--xverse3jpg1@2x.png"
            />
          </div>
        </div>
      </section>
      <section className={styles.navbarTesting1}>
        <div className={styles.cardsSection1}>
          <div className={styles.component121}>
            <img
              className={styles.figureXverseBrandGuidelin1}
              loading="lazy"
              alt=""
              src="/figure--xversebrandguidelinesjpg-11@2x.png"
            />
          </div>
          <div className={styles.component131}>
            <img
              className={styles.figureXverseBrandGuidelin2}
              loading="lazy"
              alt=""
              src="/figure--xversebrandguidelinesjpg-2@2x.png"
            />
          </div>
        </div>
      </section>
      <FrameComponent4 />
    </div>
  );
};

export default SNTL;
