import * as React from "react";
import { createContext } from "react";
export var WebPartPropsContext = createContext({});
export var WebPartPropsContextProvider = function (_a) {
    var menuItemsCollections = _a.menuItemsCollections, centreToCircle = _a.centreToCircle, context = _a.context, children = _a.children;
    var getSubItems = function (itemsCollections, perentId) {
        var tempArray = [];
        for (var _i = 0, itemsCollections_1 = itemsCollections; _i < itemsCollections_1.length; _i++) {
            var itemsCollection = itemsCollections_1[_i];
            if (itemsCollection.relationId === perentId) {
                tempArray.push({
                    title: itemsCollection.fields["title"].value,
                    url: itemsCollection.fields["url"].value,
                    imageUrl: itemsCollection.fields["imageUrl"].value,
                    icon: itemsCollection.fields["icon"].value,
                    color: itemsCollection.fields["colour"].value,
                    extraInfoId: itemsCollection.fields["extraInfoId"].value,
                    subMenu: itemsCollection.level <= 3 &&
                        getSubItems(menuItemsCollections, itemsCollection.uniqueId),
                });
            }
        }
        return tempArray;
    };
    var composeItems = function () {
        var composedMenuItems = [];
        for (var _i = 0, menuItemsCollections_1 = menuItemsCollections; _i < menuItemsCollections_1.length; _i++) {
            var collection = menuItemsCollections_1[_i];
            if (collection.level === 1) {
                composedMenuItems.push({
                    title: collection.fields["title"].value,
                    url: collection.fields["url"].value,
                    icon: collection.fields["icon"].value,
                    imageUrl: collection.fields["imageUrl"].value,
                    color: collection.fields["colour"].value,
                    extraInfoId: collection.fields["extraInfoId"].value,
                    subMenu: getSubItems(menuItemsCollections, collection.uniqueId),
                });
            }
        }
        return composedMenuItems;
    };
    return (React.createElement(WebPartPropsContext.Provider, { value: { menuItems: composeItems(), centreToCircle: centreToCircle, context: context } }, children));
};
//# sourceMappingURL=WebPartPropsContext.js.map