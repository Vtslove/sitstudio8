import { FunctionComponent } from "react";
import Header from "../components/Header";
import Footer1 from "../components/Footer1";
import styles from "./LinkedInLearning.module.css";

const LinkedInLearning: FunctionComponent = () => {
  return (
    <div className={styles.linkedinLearning}>
      <Header />
      <section className={styles.mainInfoWrapper}>
        <div className={styles.mainInfo}>
          <div className={styles.navigation}>
            <h1 className={styles.linkedinLearningProject}>
              Linkedin learning project.
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
      <div className={styles.latestWork}>Latest work</div>
      <section className={styles.header}>
        <div className={styles.cardsSection}>
          <div className={styles.component12}>
            <img
              className={styles.figureXverseBrandGuidelin}
              loading="lazy"
              alt=""
              src="/figure--xversebrandguidelinesjpg@2x.png"
            />
          </div>
          <div className={styles.component13}>
            <img
              className={styles.figureXverse3jpg}
              loading="lazy"
              alt=""
              src="/figure--xverse3jpg@2x.png"
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
              src="/figure--xversebrandguidelinesjpg-1@2x.png"
            />
          </div>
          <div className={styles.component131}>
            <img
              className={styles.figureXverse3jpg1}
              loading="lazy"
              alt=""
              src="/figure--xverse3jpg-1@2x.png"
            />
          </div>
        </div>
      </section>
      <Footer1 />
    </div>
  );
};

export default LinkedInLearning;
