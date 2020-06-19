import * as React from "react";
import { Panel, PanelType, DefaultButton, IconButton, Separator, } from "office-ui-fabric-react";
import { MenuDataCollectionsContext } from "../context/MenuDataCollectionsContext";
import { TableRender } from "./TableRender";
import { getDataCollectionByLevel } from "../utils/getDataCollectionByLevel";
import { validateFields } from "../utils/validate";
import styles from "../styles/MenuDataCollection.module.scss";
export var MenuDataCollectionsBuilderPanel = function () {
    var _a = React.useContext(MenuDataCollectionsContext), navigateLevelUp = _a.navigateLevelUp, webPartPropertyBtnLabel = _a.webPartPropertyBtnLabel, levelTitle = _a.levelTitle, level = _a.level, fields = _a.fields, parentUniqueId = _a.parentUniqueId, onWebPartPropsChanged = _a.onWebPartPropsChanged, dataCollections = _a.dataCollections, inputFormValuesCollection = _a.inputFormValuesCollection, onChangeInputFieldValue = _a.onChangeInputFieldValue;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(false), isValid = _c[0], setIsValid = _c[1];
    var onRenderHeader = function () {
        return level !== 1 ? (React.createElement("div", { className: styles.panelBuilderTitle },
            React.createElement(IconButton, { onClick: function () { return navigateLevelUp(); }, iconProps: { iconName: "ChevronLeft" }, styles: { icon: { height: 20, fontSize: 30 } } }),
            React.createElement("span", { style: { marginLeft: 10 } }, "Submenu builder for : " + levelTitle))) : (React.createElement("span", { className: styles.panelBuilderTitle }, "Menu builder"));
    };
    var validate = function (inputs) {
        // const existingDataCollection = dataCollections.find(dC=> dC.uniqueId === .)
        // validateCollections(inputs, )
        setIsValid(validateFields(inputs));
    };
    var setDefaultValue = React.useCallback(function () {
        fields.map(function (field) {
            if (field.type === "custom") {
                if (inputFormValuesCollection[field.id] &&
                    !inputFormValuesCollection[field.id].value) {
                    inputFormValuesCollection[field.id].value = field.setDefaultValue();
                    onChangeInputFieldValue(inputFormValuesCollection);
                }
            }
        });
    }, [inputFormValuesCollection]);
    React.useEffect(function () {
        validate(inputFormValuesCollection);
        setDefaultValue();
    }, []);
    React.useEffect(function () {
        onWebPartPropsChanged(dataCollections);
    }, [dataCollections]);
    return (React.createElement("div", null,
        React.createElement(DefaultButton, { text: webPartPropertyBtnLabel, onClick: function () { return setIsOpen(true); } }),
        React.createElement(Panel, { isOpen: isOpen, onDismiss: function () { return setIsOpen(false); }, type: PanelType.large, closeButtonAriaLabel: "Close", onRenderHeader: onRenderHeader },
            React.createElement("div", { className: styles.menuDataCollectionPanelTable },
                React.createElement(Separator, null),
                React.createElement(TableRender, { isValid: isValid, inputFormValuesCollection: inputFormValuesCollection, dataCollections: getDataCollectionByLevel(dataCollections, level, parentUniqueId) }),
                React.createElement("div", { className: styles.panelActions },
                    React.createElement(DefaultButton, { text: "Cancel", onClick: function () { return setIsOpen(false); } }))))));
};
//# sourceMappingURL=MenuDataCollectionsBuilderPanel.js.map