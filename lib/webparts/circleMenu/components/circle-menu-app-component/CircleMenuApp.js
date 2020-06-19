var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import { MenuWrapper } from "../menu-wrapper-component/MenuWrapper";
import { WebPartPropsContextProvider } from "../../contexts/webpart-context/WebPartPropsContext";
import { Guideline } from "../guideline-component/Guideline";
import styles from "./CircleMenu.module.scss";
export var CircleMenuApp = function (props) {
    return (React.createElement(WebPartPropsContextProvider, __assign({}, props),
        React.createElement("div", { className: styles.circleMenu },
            React.createElement("div", { className: styles.container },
                React.createElement(Guideline, null),
                React.createElement(MenuWrapper, null)))));
};
//# sourceMappingURL=CircleMenuApp.js.map