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
import { MenuDataCollectionsBuilderPanel } from "./components/MenuDataCollectionsBuilderPanel";
import { MenuDataCollectionsContextProvider } from "./context/MenuDataCollectionsContext";
export var AppMenuDataCollectionsBuilder = function (props) {
    return (React.createElement("div", null,
        React.createElement(MenuDataCollectionsContextProvider, __assign({}, props),
            React.createElement(MenuDataCollectionsBuilderPanel, __assign({}, props)))));
};
//# sourceMappingURL=AppMenuDataCollectionsBuilder.js.map