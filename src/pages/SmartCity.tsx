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
              SMART CITY PROJECT.
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
      <section className={styles.header1}>
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
      <Footer />
    </div>
  );
};

export default LinkedInLearning;
