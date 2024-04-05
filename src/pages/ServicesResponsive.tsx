import { FunctionComponent } from "react";
import Header from "../components/Header";
import MainInfo from "../components/MainInfo";
import FrameComponent3 from "../components/FrameComponent3";
import Footer from "../components/Footer";
import styles from "./ServicesResponsive.module.css";

const ServicesResponsive: FunctionComponent = () => {
  return (
    <div className={styles.servicesResponsive}>
      <Header
        navbarTestingBackgroundImage="url('/header1@3x.png')"
        navbarTestingMinHeight="510px"
      />
      <section className={styles.mainContainer}>
        <MainInfo
          internetAnd="Global network"
          propAlignSelf="unset"
          propFlex="1"
        />
      </section>
      <section className={styles.developmentWidgets}>
        <div className={styles.frameParent}>
          <div className={styles.divelementorElementWrapper}>
            <div className={styles.divelementorElement}>
              <FrameComponent3
                dEVELOPMENT="DEVELOPMENT"
                developmentTNCsvg="/developmenttncsvg.svg"
              />
              <div className={styles.divelementorWidgetContainer}>
                <div className={styles.list}>
                  <div className={styles.item}>
                    <div className={styles.spanelementorIconListText}>
                      <h1 className={styles.uxui}>UX/UI</h1>
                    </div>
                  </div>
                  <div className={styles.item1}>
                    <div className={styles.spanelementorIconListText1}>
                      <h1 className={styles.emailMarketing}>
                        <p className={styles.email}>EMAIL</p>
                        <p className={styles.marketing}>MARKETING</p>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.divelementorElementContainer}>
            <div className={styles.divelementorElement1}>
              <FrameComponent3
                dEVELOPMENT="BRANDING"
                developmentTNCsvg="/brandingtncsvg.svg"
                propHeight="unset"
                propHeight1="unset"
                propHeight2="168.1px"
                propWidth="unset"
                propHeight3="168.1px"
                propHeight4="unset"
              />
              <div className={styles.divelementorWidgetContainer1}>
                <div className={styles.list1}>
                  <div className={styles.item2}>
                    <div className={styles.spanelementorIconListText2}>
                      <h1 className={styles.strategy}>STRATEGY</h1>
                    </div>
                  </div>
                  <div className={styles.item3}>
                    <div className={styles.spanelementorIconListText3}>
                      <h1 className={styles.identity}>IDENTITY</h1>
                    </div>
                  </div>
                  <div className={styles.item4}>
                    <div className={styles.spanelementorIconListText4}>
                      <h1 className={styles.consultancy}>CONSULTANCY</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.divelementorElementFrame}>
            <div className={styles.divelementorElement2}>
              <FrameComponent3
                dEVELOPMENT="CONTENT"
                developmentTNCsvg="/contenttncsvg.svg"
                propHeight="unset"
                propHeight1="unset"
                propHeight2="151.4px"
                propWidth="unset"
                propHeight3="151.4px"
                propHeight4="unset"
              />
              <div className={styles.divelementorWidgetContainer2}>
                <div className={styles.list2}>
                  <div className={styles.item5}>
                    <div className={styles.spanelementorIconListText5}>
                      <h1 className={styles.photoVideoContainer}>
                        <p className={styles.photoVideo}>{`PHOTO & VIDEO`}</p>
                        <p className={styles.production}>PRODUCTION</p>
                      </h1>
                    </div>
                  </div>
                  <div className={styles.item6}>
                    <div className={styles.spanelementorIconListText6}>
                      <h1 className={styles.campaignDevelopment}>
                        <p className={styles.campaign}>CAMPAIGN</p>
                        <p className={styles.development}>DEVELOPMENT</p>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.mainInfoParent}>
        <MainInfo
          internetAnd="Barcelona and"
          globalNetwork="Amsterdam."
          propAlignSelf="stretch"
          propFlex="unset"
        />
        <Footer />
      </section>
    </div>
  );
};

export default ServicesResponsive;
