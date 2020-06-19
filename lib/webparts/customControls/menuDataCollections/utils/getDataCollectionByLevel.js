export var getDataCollectionByLevel = function (dataCollections, subLevel, parentUniqueId) {
    return subLevel === 1
        ? dataCollections.filter(function (d) { return d.level === subLevel; })
        : dataCollections.filter(function (d) { return d.level === subLevel && d.relationId === parentUniqueId; });
};
//# sourceMappingURL=getDataCollectionByLevel.js.map