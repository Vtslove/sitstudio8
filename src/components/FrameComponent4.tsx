import { FunctionComponent } from "react";
import styles from "./styles/FrameComponent4.module.css";

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
      <div className={styles.footer}>
        <div className={styles.moscowStBolotnikovskaya}>
          117638, Moscow, st. Bolotnikovskaya, 30 sq. 24
        </div>
        <div className={styles.footer1}>
          <h1 className={styles.sitStudio}>sit studio</h1>
        </div>
        <div className={styles.catalogParent}>
          <div className={styles.catalog}>Catalog</div>
          <div className={styles.rehabSimulators}>
            <div className={styles.eswt}>ESWT</div>
            <div className={styles.hilt}>HILT</div>
            <div className={styles.skinIq}>Skin IQ</div>
            <div className={styles.rehabSimulators1}>Rehab Simulators</div>
            <div className={styles.eecp}>EECP</div>
          </div>
        </div>
        <div className={styles.servicesAbout}>
          <div className={styles.services}>Services</div>
          <div className={styles.orderDesign}>
            <div className={styles.orderDesign1}>Order Design</div>
            <div className={styles.consultation}>Consultation</div>
          </div>
        </div>
        <div className={styles.servicesAbout1}>
          <div className={styles.about}>About</div>
          <div className={styles.aboutUsParent}>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.news}>News</div>
          </div>
        </div>
        <button className={styles.getInTouchWrapper}>
          <div className={styles.getInTouch}>Get In Touch</div>
        </button>
        <div className={styles.socials}>
          <button className={styles.iconYouTube}>
            <img
              className={styles.icons8Tiktok1}
              alt=""
              src="/icons8tiktok-1.svg"
            />
          </button>
          <button className={styles.iconYouTube1}>
            <img
              className={styles.icons8Youtube1}
              alt=""
              src="/icons8youtube-1.svg"
            />
          </button>
        </div>
        <div className={styles.contacts}>
          <div className={styles.contactBox} />
          <div className={styles.copyrightNotice}>+7 (999) 400 67 10</div>
          <div className={styles.sitstudiomailgmailcom}>
            sitstudiomail@gmail.com
          </div>
        </div>
        <div className={styles.sitStudioAllContainer}>
          <p className={styles.sitStudio1}>© 2024 — sit studio</p>
          <p className={styles.allRightsReserved}>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent4;
