import { FunctionComponent } from "react";
import Header1 from "../components/Header1";
import Footer2 from "../components/Footer2";
import styles from "./RealEstate.module.css";

const RealEstate: FunctionComponent = () => {
  return (
    <div className={styles.realEstate}>
      <Header1 navbarTestingBackgroundImage="url('/header@3x.png')" />
      <section className={styles.mainInfo}>
        <div className={styles.navigation}>
          <h1 className={styles.vanguardReal}>Vanguard - Real Estate</h1>
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
      </section>
      <section className={styles.gallerySection}>
        <div className={styles.latestWork}>Latest work</div>
        <div className={styles.cardsSection}>
          <div className={styles.component12}>
            <img
              className={styles.figureXverseBrandGuidelin}
              loading="lazy"
              alt=""
              src="/figure--xversebrandguidelinesjpg4@2x.png"
            />
          </div>
        </div>
      </section>
      <section className={styles.mainInfo1}>
        <div className={styles.navigation1}>
          <h1 className={styles.aCreativeAgencyContainer}>
            <p className={styles.aCreative}>A creative</p>
            <p className={styles.agencyFueled}>agency fueled</p>
            <p className={styles.byCulture}>by culture,</p>
            <p className={styles.basedIn}>based in</p>
            <p className={styles.internetAnd}>Internet and</p>
            <p className={styles.globalNetwork}>Global Network.</p>
          </h1>
          <div className={styles.menuItems1}>
            <h3 className={styles.ourTeamMergesContainer1}>
              <p className={styles.ourTeamMerges1}>
                Our team merges extensive expertise in strategy, branding and
                content, with the
              </p>
              <p className={styles.ultimateMissionOf1}>
                ultimate mission of enabling our partners in connecting with
                modern audiences.
              </p>
            </h3>
          </div>
        </div>
      </section>
      <Footer2 />
    </div>
  );
};

export default RealEstate;
