import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./styles/MainInfo.module.css";

export type MainInfoType = {
  internetAnd?: string;
  globalNetwork?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
};

const MainInfo: FunctionComponent<MainInfoType> = ({
  internetAnd,
  globalNetwork,
  propAlignSelf,
  propFlex,
}) => {
  const mainInfoStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  return (
    <div className={styles.mainInfo} style={mainInfoStyle}>
      <div className={styles.navigation}>
        <h1 className={styles.aCreativeAgencyContainer}>
          <p className={styles.aCreative}>A creative</p>
          <p className={styles.agencyFueled}>agency fueled</p>
          <p className={styles.byCulture}>by culture,</p>
          <p className={styles.basedIn}>based in</p>
          <p className={styles.internetAnd}>{internetAnd}</p>
          <p className={styles.globalNetwork}>{globalNetwork}</p>
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
  );
};

export default MainInfo;
