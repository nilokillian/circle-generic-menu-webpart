import * as React from "react";
import { ID } from "../utils/generateId";
import { TextField, Checkbox, IconButton } from "office-ui-fabric-react";
import { MenuDataCollectionsContext } from "../context/MenuDataCollectionsContext";
import styles from "../styles/MenuDataCollection.module.scss";
export var TableRender = function (_a) {
    var isValid = _a.isValid, dataCollections = _a.dataCollections, inputFormValuesCollection = _a.inputFormValuesCollection;
    var _b = React.useContext(MenuDataCollectionsContext), level = _b.level, fields = _b.fields, navigateLevelDown = _b.navigateLevelDown, addToDataCollections = _b.addToDataCollections, removeDataCollection = _b.removeDataCollection, onChangeInputFieldValue = _b.onChangeInputFieldValue, onChangeDataCollection = _b.onChangeDataCollection;
    var onInputFormValueChange = function (event, newValue) {
        var fielId = event.target["name"];
        inputFormValuesCollection[fielId].value = newValue;
        onChangeInputFieldValue(inputFormValuesCollection);
    };
    var onDataCollectionValueChange = function (event, newValue) {
        var dataCollectionId = event.target.getAttribute("data-set");
        var fieldId = event.target["name"];
        onChangeDataCollection(dataCollectionId, fieldId, newValue);
    };
    var onCustomFieldValueChange = function (field, value) {
        if (inputFormValuesCollection[field]) {
            inputFormValuesCollection[field].value = value;
            onChangeInputFieldValue(inputFormValuesCollection);
        }
    };
    var onExistingCustomFieldValueChange = function (fieldId, newValue, dataCollectionId) {
        onChangeDataCollection(dataCollectionId, fieldId, newValue);
    };
    // Headers
    var renderTableHeaders = function () {
        return fields.map(function (field) { return (React.createElement("span", { className: styles.tableHead + " " + styles.tableCell }, field.title)); });
    };
    //Inputs
    var renderFormInputFields = function () {
        return (React.createElement(React.Fragment, null,
            fields.map(function (field) {
                switch (field.type) {
                    case "text":
                        return (React.createElement("span", { className: styles.tableCell + " " + styles.inputField },
                            React.createElement(TextField, { name: field.id, id: ID(), value: inputFormValuesCollection[field.id] &&
                                    inputFormValuesCollection[field.id].value, onChange: onInputFormValueChange, required: true })));
                    case "checkbox":
                        return (React.createElement("span", { className: styles.tableCell + " " + styles.inputField },
                            React.createElement(Checkbox, { name: field.id, id: ID(), checked: inputFormValuesCollection[field.id].value
                                    ? inputFormValuesCollection[field.id].value
                                    : false, onChange: onInputFormValueChange })));
                    case "custom":
                        return (React.createElement("span", { className: styles.tableCell + " " + styles.inputField }, field.onCustomRender(field.id, inputFormValuesCollection[field.id]
                            ? inputFormValuesCollection[field.id].value
                            : "#eeee", onCustomFieldValueChange)));
                }
            }),
            React.createElement("span", { className: styles.tableCell + " " + styles.inputField }),
            React.createElement("span", { className: styles.tableCell + " " + styles.inputField },
                React.createElement(IconButton, { disabled: false, iconProps: { iconName: "Add" }, onClick: function () { return addToDataCollections(level); } }))));
    };
    // Data Collections
    var renderDataCollectionsValues = function () {
        if (dataCollections.length === 0) {
            return (React.createElement("p", { className: styles.noCollectionData }, "No data in your collection."));
        }
        return dataCollections.map(function (dataCollection) {
            return (React.createElement("div", { className: styles.tableRow + " " + styles.tableFooter },
                fields.map(function (field) {
                    switch (field.type) {
                        case "text":
                            return (React.createElement("span", { className: styles.tableCell + " " + styles.inputField },
                                React.createElement(TextField, { name: field.id, "data-set": dataCollection.uniqueId, value: dataCollection.fields[field.id].value, onChange: onDataCollectionValueChange, required: true })));
                        case "checkbox":
                            return (React.createElement("span", { className: styles.tableCell + " " + styles.inputField },
                                React.createElement(Checkbox, { name: field.id, "data-set": dataCollection.uniqueId, checked: dataCollection.fields[field.id].value, onChange: onDataCollectionValueChange })));
                        case "custom":
                            return (React.createElement("span", { className: styles.tableCell + " " + styles.inputField }, field.onCustomRender(field.id, dataCollection.fields[field.id].value, onExistingCustomFieldValueChange, dataCollection.uniqueId)));
                    }
                }),
                React.createElement("span", { className: styles.tableCell + " " + styles.inputField }, level < 3 && (React.createElement(IconButton, { iconProps: { iconName: "WebAppBuilderFragmentCreate" }, onClick: function () {
                        navigateLevelDown(dataCollection.uniqueId, dataCollection.fields["title"].value);
                    } }))),
                React.createElement("span", { className: styles.tableCell + " " + styles.inputField },
                    React.createElement(IconButton, { iconProps: { iconName: "Cancel" }, onClick: function () { return removeDataCollection(dataCollection.uniqueId); } }))));
        });
    };
    return (React.createElement("div", { className: styles.table },
        React.createElement("div", { className: styles.tableRow + " " + styles.tableHead }, renderTableHeaders()),
        dataCollections.length > 0 && renderDataCollectionsValues(),
        React.createElement("div", { className: styles.tableRow + " " + styles.tableFooter }, renderFormInputFields())));
};
//# sourceMappingURL=TableRender.js.map