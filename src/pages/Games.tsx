import { FunctionComponent } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./LinkedInLearning.module.css";

const LinkedInLearning: FunctionComponent = () => {
  return (
    <div className={styles.linkedinLearning}>
      <Header />
      <section className={styles.mainInfoWrapper}>
        <div className={styles.mainInfo}>
          <div className={styles.navigation}>
            <h1 className={styles.linkedinLearningProject}>
              RIRNITAILS - GAME CONCEPT.
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
      </section>
      <section className={styles.header}>
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
      
      <Footer />
    </div>
  );
};

export default LinkedInLearning;
