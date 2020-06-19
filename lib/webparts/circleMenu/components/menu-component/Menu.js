import * as React from "react";
import { MenuItems } from "../menu-items-component/MenuItems";
import styles from "./Menu.module.scss";
var Menu = function (_a) {
    var centreToCircle = _a.centreToCircle, items = _a.items;
    return (React.createElement("div", { className: styles.menuWrapper },
        React.createElement("div", { className: styles.menuBackground },
            React.createElement(MenuItems, { centreToCircle: centreToCircle, items: items }))));
};
export var MemoizedMenu = React.memo(Menu);
//# sourceMappingURL=Menu.js.map