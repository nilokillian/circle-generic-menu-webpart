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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart, PropertyPaneSlider, PropertyPaneHorizontalRule, } from "@microsoft/sp-webpart-base";
import { CircleMenuApp } from "./components/circle-menu-app-component/CircleMenuApp";
import { initializeIcons } from "@uifabric/icons";
import { getColourPickerJSXElement } from "./customFieldControls/ColourPickerComponent";
import { PropertyMenuDataCollections } from "../customControls/menuDataCollections/propertyMenuDataCollections";
import { CustomMenuDataCollectionFieldType } from "../customControls/menuDataCollections/constants/customMenuDataCollectionFieldType";
import SharePointService from "./services/SharePointService";
var CircleMenuWebPart = /** @class */ (function (_super) {
    __extends(CircleMenuWebPart, _super);
    function CircleMenuWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleMenuWebPart.prototype.render = function () {
        var element = React.createElement(CircleMenuApp, {
            menuItemsCollections: this.properties.dataCollections,
            centreToCircle: this.properties.centreToCircle,
            context: this.context,
        });
        ReactDom.render(element, this.domElement);
    };
    CircleMenuWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    CircleMenuWebPart.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.onInit.call(this)];
                    case 1:
                        _a.sent();
                        SharePointService.setup(this.context);
                        SharePointService.pnp_setup(this.context);
                        initializeIcons();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(CircleMenuWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    CircleMenuWebPart.prototype.onPropertyPaneFieldChanged = function (propertyPath, oldValue, newValue) {
        _super.prototype.onPropertyPaneFieldChanged.call(this, propertyPath, oldValue, newValue);
        if (propertyPath === "dataCollections" &&
            newValue &&
            newValue !== oldValue) {
            this.properties.dataCollections = newValue;
            console.log("this.properties.dataCollections", this.properties.dataCollections);
            this.render();
        }
    };
    CircleMenuWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    groups: [
                        {
                            groupName: "Menu builder settings",
                            groupFields: [
                                new PropertyMenuDataCollections("dataCollections", {
                                    key: "dataCollections",
                                    panelHeaderTitle: "Menu Builder",
                                    calloutButtonTitle: "Menu Builder",
                                    value: this.properties.dataCollections,
                                    onProppertyChange: this.onPropertyPaneFieldChanged.bind(this),
                                    fields: [
                                        {
                                            id: "title",
                                            title: "Title",
                                            type: CustomMenuDataCollectionFieldType.string,
                                        },
                                        {
                                            id: "icon",
                                            title: "Icon",
                                            type: CustomMenuDataCollectionFieldType.string,
                                        },
                                        {
                                            id: "imageUrl",
                                            title: "Image Link",
                                            type: CustomMenuDataCollectionFieldType.string,
                                        },
                                        {
                                            id: "url",
                                            title: "Link",
                                            type: CustomMenuDataCollectionFieldType.string,
                                        },
                                        {
                                            id: "extraInfoId",
                                            title: "Extra Info ID",
                                            type: CustomMenuDataCollectionFieldType.string,
                                        },
                                        {
                                            id: "colour",
                                            title: "Colour",
                                            type: CustomMenuDataCollectionFieldType.custom,
                                            setDefaultValue: function () { return "#eee"; },
                                            onCustomRender: function (field, value, onCustomFieldUpdate, dataCollectionId) {
                                                return React.createElement("div", null, getColourPickerJSXElement(field, value, onCustomFieldUpdate, dataCollectionId));
                                            },
                                        },
                                    ],
                                }),
                                PropertyPaneHorizontalRule(),
                                PropertyPaneSlider("centreToCircle", {
                                    label: "Distance from center",
                                    min: 10,
                                    max: 19,
                                    value: this.properties.centreToCircle,
                                    showValue: true,
                                    step: 1,
                                }),
                            ],
                        },
                    ],
                },
            ],
        };
    };
    return CircleMenuWebPart;
}(BaseClientSideWebPart));
export default CircleMenuWebPart;
//# sourceMappingURL=CircleMenuWebPart.js.map