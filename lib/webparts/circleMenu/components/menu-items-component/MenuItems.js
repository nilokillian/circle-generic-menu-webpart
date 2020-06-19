import * as React from "react";
import { Icon, TooltipHost, Link } from "office-ui-fabric-react";
import { tooltipStyles } from "../../styles/fabricStyles";
import styles from "./MenuItems.module.scss";
export var MenuItems = function (_a) {
    var centreToCircle = _a.centreToCircle, items = _a.items;
    var btnRef = React.useRef();
    var buttons = items.map(function (item) {
        var styling = {
            transform: "rotate(" + item.rotation + "deg) \n           translate(" + centreToCircle / 1.7 + "em) \n           rotate(" + -item.rotation + "deg)",
            backgroundColor: item.color,
        };
        return (React.createElement(Link, { href: item.url, target: "_blank", className: styles.menuItem + " " + styles.itemShow, "data-interception": "off", style: styling },
            React.createElement(TooltipHost, { styles: tooltipStyles, content: item.title, id: item.title, calloutProps: { gapSpace: 10 } },
                React.createElement(Icon, { iconName: item.icon, className: "circleIcon", "aria-describedby": item.title }))));
    });
    return (React.createElement("div", { ref: btnRef, className: styles.buttonBg + " " + styles.animateMenu }, buttons));
};
//# sourceMappingURL=MenuItems.js.map