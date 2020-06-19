import * as React from "react";
import * as ReactDom from "react-dom";
import { PropertyPaneFieldType, } from "@microsoft/sp-property-pane";
import { AppMenuDataCollectionsBuilder } from "./AppMenuDataCollectionsBuilder";
var PropertyMenuDataCollections = /** @class */ (function () {
    function PropertyMenuDataCollections(targetProperty, properties) {
        this.type = PropertyPaneFieldType.Custom;
        this.targetProperty = targetProperty;
        this.properties = {
            key: properties.key,
            panelHeaderTitle: properties.panelHeaderTitle,
            calloutButtonTitle: properties.calloutButtonTitle,
            value: properties.value,
            fields: properties.fields,
            onProppertyChange: properties.onProppertyChange,
            onRender: this.onRender.bind(this),
        };
    }
    PropertyMenuDataCollections.prototype.render = function () {
        if (!this.elem)
            return;
        this.onRender(this.elem);
    };
    PropertyMenuDataCollections.prototype.onRender = function (elem) {
        if (!this.elem)
            this.elem = elem;
        var element = React.createElement(AppMenuDataCollectionsBuilder, {
            key: this.properties.key,
            label: this.properties.panelHeaderTitle,
            btnLabel: this.properties.calloutButtonTitle,
            value: this.properties.value,
            fields: this.properties.fields,
            onWebPartPropsChanged: this.onChanged.bind(this),
        });
        ReactDom.render(element, elem);
    };
    PropertyMenuDataCollections.prototype.onChanged = function (dataCollections) {
        this.properties.onProppertyChange(this.targetProperty, this.properties.value, dataCollections);
    };
    return PropertyMenuDataCollections;
}());
export { PropertyMenuDataCollections };
//# sourceMappingURL=propertyMenuDataCollections.js.map