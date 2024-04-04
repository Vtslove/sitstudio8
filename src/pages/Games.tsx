import { FunctionComponent } from "react";
import Header1 from "../components/Header1";
import FrameComponent5 from "../components/FrameComponent5";
import HeaderFooter from "../components/HeaderFooter";
import styles from "./Games.module.css";

const Games: FunctionComponent = () => {
  return (
    <div className={styles.games}>
      <Header1 navbarTestingBackgroundImage="url('/header@3x.png')" />
      <FrameComponent5 sNTLCurrencyWallet="Rirnitaitis - game concept." />
      <div className={styles.latestWork}>Latest work</div>
      <section className={styles.cardsSectionWrapper}>
        <div className={styles.cardsSection}>
          <div className={styles.component12}>
            <img
              className={styles.figureXverseBrandGuidelin}
              loading="lazy"
              alt=""
              src="/figure--xversebrandguidelinesjpg5@2x.png"
            />
          </div>
        </div>
      </section>
      <HeaderFooter propHeight="unset" propPadding="unset" />
    </div>
  );
};

export default Games;
