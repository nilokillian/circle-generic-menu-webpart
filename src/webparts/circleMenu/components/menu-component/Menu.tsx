import * as React from "react";
import { MenuItems } from "../menu-items-component/MenuItems";

import styles from "./Menu.module.scss";

const Menu = ({ centreToCircle, items }) => (
  <div className={styles.menuWrapper}>
    <div className={styles.menuBackground}>
      <MenuItems centreToCircle={centreToCircle} items={items} />
    </div>
  </div>
);

export const MemoizedMenu = React.memo(Menu);
