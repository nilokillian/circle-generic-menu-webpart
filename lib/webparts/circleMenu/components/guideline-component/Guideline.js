import * as React from "react";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import { WebPartPropsContext } from "../../contexts/webpart-context/WebPartPropsContext";
import { Stack } from "office-ui-fabric-react";
import styles from "./Guideline.module.scss";
var stackTokens = { childrenGap: 10 };
var everyFourth = ["0", "1", "2", "3", "4", "5", "6", "7"];
export var Guideline = function () {
    var items = React.useContext(WebPartPropsContext).menuItems;
    var test = function () {
        for (var i = 0; i < everyFourth.length; i++) {
            if (i && i % 3 === 0) {
                console.log(everyFourth[i]);
            }
        }
    };
    test();
    var composeIcons = function () {
        // const icons = []
        return items.map(function (item, i) {
            // if(i%4==0 ){
            //   icons.push()
            // }
            return (React.createElement(Stack.Item, null,
                React.createElement("div", { className: styles.iconContainer },
                    React.createElement(Icon, { styles: { root: { fontSize: 20, color: item.color } }, iconName: item.icon, "aria-describedby": item.title }),
                    React.createElement("span", { className: styles.iconTitle }, item.title))));
        });
    };
    return (React.createElement("div", { className: styles.guideline },
        React.createElement(Stack, { horizontal: true, wrap: true, horizontalAlign: "start", tokens: stackTokens }, composeIcons())));
};
//# sourceMappingURL=Guideline.js.map