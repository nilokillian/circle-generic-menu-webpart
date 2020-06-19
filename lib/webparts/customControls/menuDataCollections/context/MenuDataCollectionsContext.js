import * as React from "react";
import { initInputForm } from "../utils/initInputForm";
import { ID } from "../utils/generateId";
import { Actions, } from "./IMenuDataCollectionsContextTypes";
import { usePreviousState } from "../hooks/usePreviousState";
import { reducer } from "./reducer";
var MenuDataCollectionsContext = React.createContext({});
var MenuDataCollectionsContextProvider = function (props) {
    //props from webpart
    var fields = props.fields, value = props.value, btnLabel = props.btnLabel, onWebPartPropsChanged = props.onWebPartPropsChanged;
    var initialState = {
        currentLevel: 1,
        currentParentUniqueId: "",
        currentLevelTitle: "",
        inputFormValuesCollection: initInputForm(fields),
        dataCollections: value,
    };
    var _a = React.useReducer(reducer, initialState), state = _a[0], dispatch = _a[1];
    var parentPrevState = usePreviousState({
        title: state.currentLevelTitle,
        uniqueId: state.currentParentUniqueId,
    });
    var removeDataCollection = function (dataCollectionId) {
        var dataCollections = state.dataCollections;
        var newDataCollections = [];
        var currentDataCollectionToRemove = dataCollections.find(function (d) { return d.uniqueId === dataCollectionId; });
        if (currentDataCollectionToRemove) {
            switch (currentDataCollectionToRemove.level) {
                case 1:
                    var dataCollectionsL2Ids_1 = dataCollections
                        .filter(function (d) { return d.relationId === dataCollectionId; })
                        .map(function (filteredData) { return filteredData.uniqueId; });
                    var dataCollectionsL3Removed = dataCollections.filter(function (d) {
                        return d.relationId !==
                            dataCollectionsL2Ids_1.find(function (id) { return id === d.relationId; });
                    });
                    newDataCollections.push.apply(newDataCollections, dataCollectionsL3Removed.filter(function (d) {
                        return d.uniqueId !== dataCollectionId &&
                            d.relationId !== dataCollectionId;
                    }));
                    break;
                case 2:
                    newDataCollections.push.apply(newDataCollections, dataCollections.filter(function (d) {
                        return d.uniqueId !== dataCollectionId &&
                            d.relationId !== dataCollectionId;
                    }));
                    break;
                case 3:
                    newDataCollections.push.apply(newDataCollections, dataCollections.filter(function (d) { return d.uniqueId !== dataCollectionId; }));
                    break;
                default:
                    newDataCollections.push.apply(newDataCollections, dataCollections);
                    break;
            }
        }
        dispatch({
            type: Actions.REMOVE_DATA_COLLECTION,
            payload: newDataCollections,
        });
    };
    var onChangeDataCollection = function (dataCollectionId, fieldId, newValue) {
        var dataCollections = state.dataCollections;
        for (var _i = 0, dataCollections_1 = dataCollections; _i < dataCollections_1.length; _i++) {
            var dataCollection = dataCollections_1[_i];
            if (dataCollection.uniqueId === dataCollectionId) {
                dataCollection.fields[fieldId].value = newValue;
            }
        }
        dispatch({
            type: Actions.ON_CHANGE_DATA_COLLECTION,
            payload: dataCollections,
        });
    };
    var onChangeInputFieldValue = function (inputData) {
        dispatch({
            type: Actions.ON_CHANGE_INPUT_VALUE,
            payload: inputData,
        });
    };
    // add new collection to dataCollections array
    var addToDataCollections = function (level) {
        dispatch({
            type: Actions.ADD_TO_DATA_COLLECTIONS,
            payload: {
                inputFormValuesCollection: initInputForm(fields),
                dataCollections: state.dataCollections.concat([
                    {
                        fields: state.inputFormValuesCollection,
                        uniqueId: ID(),
                        relationId: state.currentParentUniqueId,
                        level: level,
                    },
                ]),
            },
        });
    };
    // toggle level, depth + 1 / filter dataCollections correspondingly / clear inputs
    var navigateLevelDown = function (parentUniqueId, levelTitle) {
        dispatch({
            type: Actions.NAVIGATE_LEVEL_DOWN,
            payload: {
                currentLevel: state.currentLevel + 1,
                levelTitle: levelTitle,
                parentUniqueId: parentUniqueId,
                inputFormValuesCollection: initInputForm(fields),
            },
        });
    };
    // toggle level, depth - 1 / filter dataCollections correspondingly / clear inputs
    var navigateLevelUp = function () {
        dispatch({
            type: Actions.NAVIGATE_LEVEL_UP,
            payload: {
                levelTitle: parentPrevState.title,
                level: state.currentLevel !== 1
                    ? state.currentLevel - 1
                    : state.currentLevel,
                parentUniqueId: parentPrevState.uniqueId,
                inputFormValuesCollection: initInputForm(fields),
            },
        });
    };
    return (React.createElement(MenuDataCollectionsContext.Provider, { value: {
            level: state.currentLevel,
            levelTitle: state.currentLevelTitle,
            parentUniqueId: state.currentParentUniqueId,
            fields: fields,
            dataCollections: state.dataCollections,
            inputFormValuesCollection: state.inputFormValuesCollection,
            onChangeInputFieldValue: onChangeInputFieldValue,
            onChangeDataCollection: onChangeDataCollection,
            navigateLevelDown: navigateLevelDown,
            navigateLevelUp: navigateLevelUp,
            addToDataCollections: addToDataCollections,
            removeDataCollection: removeDataCollection,
            webPartPropertyBtnLabel: btnLabel,
            onWebPartPropsChanged: onWebPartPropsChanged,
        } }, props.children));
};
export { MenuDataCollectionsContext, MenuDataCollectionsContextProvider };
//# sourceMappingURL=MenuDataCollectionsContext.js.map