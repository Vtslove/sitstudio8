import { FunctionComponent } from "react";
import styles from "./styles/FrameComponent5.module.css";

export type FrameComponent5Type = {
  sNTLCurrencyWallet?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  sNTLCurrencyWallet,
}) => {
  return (
    <section className={styles.mainInfoWrapper}>
      <div className={styles.mainInfo}>
        <div className={styles.navigation}>
          <h1 className={styles.sntlCurrencyWallet}>{sNTLCurrencyWallet}</h1>
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
    </section>
  );
};

export default FrameComponent5;
