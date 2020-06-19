var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import { IconButton, ColorPicker, Callout, DirectionalHint, } from "office-ui-fabric-react";
var ColourPickerComponent = /** @class */ (function (_super) {
    __extends(ColourPickerComponent, _super);
    function ColourPickerComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.contextualMneuDialogRef = React.createRef();
        _this.onColourChange = function (_ev, colorObj) {
            //console.log("colorObj.str", colorObj);
            _this.props.onUpdate(_this.props.field, colorObj.str, _this.props.dataCollectionId);
        };
        _this.state = {
            isColourPicker: false,
        };
        return _this;
    }
    ColourPickerComponent.prototype.render = function () {
        var _this = this;
        var isColourPicker = this.state.isColourPicker;
        return (React.createElement(React.Fragment, null,
            React.createElement(IconButton, { iconProps: { iconName: "Precipitation" }, onClick: function () { return _this.setState({ isColourPicker: true }); } }),
            React.createElement("div", { className: "calloutArea", ref: this.contextualMneuDialogRef }, isColourPicker && (React.createElement(Callout, { gapSpace: 0, target: this.contextualMneuDialogRef.current, onDismiss: function () { return _this.setState({ isColourPicker: false }); }, setInitialFocus: true, isBeakVisible: false, directionalHint: DirectionalHint.bottomCenter },
                React.createElement(ColorPicker, { color: this.props.color ? this.props.color : "#fff", onChange: this.onColourChange, alphaSliderHidden: false }))))));
    };
    return ColourPickerComponent;
}(React.Component));
export var getColourPickerJSXElement = function (field, value, onUpdate, dataCollectionId) {
    return (React.createElement(ColourPickerComponent, { onUpdate: onUpdate, color: value, field: field, dataCollectionId: dataCollectionId }));
};
//# sourceMappingURL=ColourPickerComponent.js.map