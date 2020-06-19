export var validateFields = function (collection) {
    var anyEmpty = Object.entries(collection).some(function (obj) { return !obj[1].value; });
    return !anyEmpty;
};
export var validateCollections = function (currentCollection, existingCollection) { };
//# sourceMappingURL=validate.js.map