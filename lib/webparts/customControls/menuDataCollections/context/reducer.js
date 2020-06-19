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
import { Actions, } from "./IMenuDataCollectionsContextTypes";
export var reducer = function (state, action) {
    switch (action.type) {
        case Actions.REMOVE_DATA_COLLECTION:
            return __assign({}, state, { dataCollections: action.payload.slice() });
        case Actions.ON_CHANGE_INPUT_VALUE:
            return __assign({}, state, { inputFormValuesCollection: action.payload });
        case Actions.ON_CHANGE_DATA_COLLECTION:
            return __assign({}, state, { dataCollections: action.payload.slice() });
        case Actions.ADD_TO_DATA_COLLECTIONS:
            return __assign({}, state, { inputFormValuesCollection: action.payload.inputFormValuesCollection, dataCollections: action.payload.dataCollections });
        case Actions.NAVIGATE_LEVEL_DOWN:
            return __assign({}, state, { currentLevel: action.payload.currentLevel, currentParentUniqueId: action.payload.parentUniqueId, currentLevelTitle: action.payload.levelTitle, inputFormValuesCollection: action.payload.inputFormValuesCollection });
        case Actions.NAVIGATE_LEVEL_UP:
            return __assign({}, state, { currentLevel: action.payload.level, currentParentUniqueId: action.payload.level === 1 ? "" : action.payload.parentUniqueId, currentLevelTitle: action.payload.levelTitle, inputFormValuesCollection: action.payload.inputFormValuesCollection });
        default:
            return state;
    }
};
//# sourceMappingURL=reducer.js.map