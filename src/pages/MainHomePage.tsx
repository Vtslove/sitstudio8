import { FunctionComponent } from "react";
import CorruptedHeader from "../components/CorruptedHeader";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./MainHomePage.module.css";

const MainHomePage: FunctionComponent = () => {
  return (
    <div className={styles.mainHomePage}>
      <CorruptedHeader />
      <FrameComponent1 />
      <section className={styles.frameParent}>
        <div className={styles.menuItemsWrapper}>
          <div className={styles.menuItems}>
            <h1 className={styles.contactUsGetContainer}>
              <span className={styles.letters}>
                <span>{`Contact us, get our email: `}</span>
                <b>sitstudiomail@gmail.com</b>
              </span>
            </h1>
          </div>
        </div>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/frame-308@2x.png"
        />
      </section>
      <FrameComponent />
    </div>
  );
};

export default MainHomePage;
