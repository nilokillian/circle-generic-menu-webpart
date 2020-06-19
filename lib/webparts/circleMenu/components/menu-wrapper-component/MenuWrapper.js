import * as React from "react";
import { MemoizedMenu } from "../menu-component/Menu";
import { InnerCircle } from "../inner-circle-component/InnerCircle";
import { WebPartPropsContext } from "../../contexts/webpart-context/WebPartPropsContext";
export var MenuWrapper = function () {
    var _a = React.useContext(WebPartPropsContext), menuItems = _a.menuItems, centreToCircle = _a.centreToCircle;
    var makeMenu = function (menuConfig) {
        var angle = 360 / menuConfig.length;
        var rotation = 0;
        var makeMenuItems = [];
        menuConfig.forEach(function (_a) {
            var color = _a.color, icon = _a.icon, title = _a.title, imageUrl = _a.imageUrl, extraInfoId = _a.extraInfoId, url = _a.url, subMenu = _a.subMenu;
            makeMenuItems.push({
                color: color,
                icon: icon,
                title: title,
                imageUrl: imageUrl,
                extraInfoId: extraInfoId,
                subMenu: subMenu,
                rotation: rotation,
                angle: angle,
                url: url,
                show: false,
            });
            rotation += angle;
        });
        return makeMenuItems;
    };
    var _b = React.useState(function () {
        return makeMenu(menuItems);
    }), animatedMenuItems = _b[0], setAnimatedMenuItems = _b[1];
    // staggerd fade menu items in
    var animateButtons = function (items) {
        var length = items.length;
        var stagger = function (i) {
            if (i < length) {
                setTimeout(function () {
                    items[i].show = true;
                    setAnimatedMenuItems(items.slice());
                    stagger(i + 1);
                }, 70);
            }
        };
        stagger(0);
    };
    React.useEffect(function () {
        animateButtons(makeMenu(menuItems));
        console.log("menu items changed", menuItems);
    }, [menuItems]);
    return (React.createElement("div", null,
        React.createElement(InnerCircle, null),
        React.createElement(MemoizedMenu, { centreToCircle: centreToCircle, items: animatedMenuItems })));
};
//# sourceMappingURL=MenuWrapper.js.map