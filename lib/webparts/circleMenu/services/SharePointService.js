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
import { sp, } from "@pnp/sp";
var SharePointServiceManager = /** @class */ (function () {
    function SharePointServiceManager() {
        var _this = this;
        this.pnp_search = function (qText) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                sp.searchSuggest({
                    querytext: "BusinessUnits",
                    count: 5,
                }).then(function (r) {
                    console.log(r);
                });
                return [2 /*return*/];
            });
        }); };
        // public pnp_getUsersProfiles_AD = async (
        //   queryString: string,
        //   maximumEntity?: number
        // ) => {
        //   const q = {
        //     MaximumEntitySuggestions: maximumEntity ? maximumEntity : 5,
        //     PrincipalSource: 15,
        //     PrincipalType: 15,
        //     QueryString: queryString,
        //   };
        //   return await sp.profiles.clientPeoplePickerSearchUser(q);
        // };
        this.pnp_getUsersProfiles_SP = function (queryString) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sp.web.siteUsers.filter(queryString ? queryString : "").get()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.pnp_getProperties = function (loginName) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sp.profiles.getPropertiesFor(loginName)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.pnp_getUserProfileProperty = function (loginName, propName) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sp.profiles.getUserProfilePropertyFor(loginName, propName)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.pnp_getUserById = function (userId) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sp.web.getUserById(userId).get()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.pnp_SearchItems = function (queryString) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        }); };
        this.pnp_getSPUserID = function (userEmail) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sp.web.siteUsers.getByEmail(userEmail).get()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.pnp_addItem = function (listTitle, itemObject) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sp.web.lists
                            .getByTitle(listTitle)
                            .items.add(itemObject)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        }); };
        this.pnp_updateItem = function (listTitle, itemId, itemObject) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sp.web.lists
                            .getByTitle(listTitle)
                            .items.getById(itemId)
                            .update(itemObject)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        }); };
        this.pnp_getLists = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, sp.web.lists.get()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.pnp_getListItems = function (listTitle) { return __awaiter(_this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, sp.web.lists.getByTitle(listTitle).items.get()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.pnp_getListItemsAdvanced = function (listTitle, selectedFiled, expend, filterString) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, error_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, (_a = (_b = sp.web.lists
                                .getByTitle(listTitle)
                                .items).select.apply(_b, selectedFiled)).expand.apply(_a, expend).filter(filterString ? filterString : "")
                                .top(300)
                                .get()];
                    case 1: return [2 /*return*/, _c.sent()];
                    case 2:
                        error_3 = _c.sent();
                        throw "pnp_getListItemsAdvanced: " + error_3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.pnp_getChoiseOptions = function (listTitle, fieldName) { return __awaiter(_this, void 0, void 0, function () {
            var result, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, sp.web.lists
                                .getByTitle(listTitle)
                                .fields.getByTitle(fieldName)
                                .get()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        error_4 = _a.sent();
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
    }
    SharePointServiceManager.prototype.setup = function (context) {
        this.context = context;
    };
    SharePointServiceManager.prototype.pnp_setup = function (content) {
        sp.setup({ spfxContext: content });
    };
    return SharePointServiceManager;
}());
export { SharePointServiceManager };
var SharePointService = new SharePointServiceManager();
export default SharePointService;
//# sourceMappingURL=SharePointService.js.map