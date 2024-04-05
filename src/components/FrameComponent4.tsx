import { FunctionComponent } from "react";
import styles from "./styles/FrameComponent4.module.css";
import Footer from "./Footer";

const FrameComponent4: FunctionComponent = () => {
  return (
    <footer className={styles.mainInfoParent}>
      <div className={styles.mainInfo}>
        <div className={styles.navigation}>
          <h1 className={styles.aCreativeAgencyContainer}>
            <p className={styles.aCreative}>A creative</p>
            <p className={styles.agencyFueled}>agency fueled</p>
            <p className={styles.byCulture}>by culture,</p>
            <p className={styles.basedIn}>based in</p>
            <p className={styles.internetAnd}>Internet and</p>
            <p className={styles.globalNetwork}>Global Network.</p>
          </h1>
          <div className={styles.menuItems}>
            <h3 className={styles.ourTeamMergesContainer}>
              <p className={styles.ourTeamMerges}>
                Our team merges extensive expertise in strategy, branding and
                content, with the
              </p>
              <p className={styles.ultimateMissionOf}>
                ultimate mission of enabling our partners in connecting with
                modern audiences.
              </p>
            </h3>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </footer>
  );
};

export default FrameComponent4;
