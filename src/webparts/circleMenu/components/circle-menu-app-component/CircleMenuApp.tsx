import * as React from "react";
import { ICircleMenuAppProps } from "../../interfaces/ICircleMenuAppProps";
import { MenuWrapper } from "../menu-wrapper-component/MenuWrapper";
import { WebPartPropsContextProvider } from "../../contexts/webpart-context/WebPartPropsContext";
import { Guideline } from "../guideline-component/Guideline";

import styles from "./CircleMenu.module.scss";

export const CircleMenuApp: React.FC<ICircleMenuAppProps> = (props) => {
  return (
    <WebPartPropsContextProvider {...props}>
      <div className={styles.circleMenu}>
        <div className={styles.container}>
          <Guideline />
          <MenuWrapper />
        </div>
      </div>
    </WebPartPropsContextProvider>
  );
};
