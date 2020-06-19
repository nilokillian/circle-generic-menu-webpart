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
import { ID } from "./generateId";
export var initInputForm = function (fields, parentUniqueId) {
    var obj = {};
    fields.map(function (f) {
        var _a;
        var key = f.id;
        obj = __assign({}, obj, (_a = {}, _a[key] = {
            value: f.type === "checkbox" ? false : "",
            uniqueId: ID(),
            relationId: parentUniqueId ? parentUniqueId : "",
            type: f.type,
        }, _a));
    });
    return obj;
};
//# sourceMappingURL=initInputForm.js.map