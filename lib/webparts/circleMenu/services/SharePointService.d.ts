import { WebPartContext } from "@microsoft/sp-webpart-base";
import { ItemAddResult } from "@pnp/sp";
export declare class SharePointServiceManager {
    context: WebPartContext;
    setup(context: WebPartContext): void;
    pnp_setup(content: WebPartContext): void;
    pnp_search: (qText?: string) => Promise<any>;
    pnp_getUsersProfiles_SP: (queryString?: string) => Promise<any>;
    pnp_getProperties: (loginName: string) => Promise<any[]>;
    pnp_getUserProfileProperty: (loginName: string, propName: string) => Promise<string>;
    pnp_getUserById: (userId: number) => Promise<any>;
    pnp_SearchItems: (queryString?: string) => Promise<void>;
    pnp_getSPUserID: (userEmail: string) => Promise<any>;
    pnp_addItem: (listTitle: string, itemObject: {}) => Promise<ItemAddResult>;
    pnp_updateItem: (listTitle: string, itemId: number, itemObject: {}) => Promise<import("@pnp/sp").ItemUpdateResult>;
    pnp_getLists: () => Promise<any>;
    pnp_getListItems: (listTitle: string) => Promise<any>;
    pnp_getListItemsAdvanced: (listTitle: string, selectedFiled: string[], expend: string[], filterString?: string) => Promise<any>;
    pnp_getChoiseOptions: (listTitle: string, fieldName: string) => Promise<any>;
}
declare const SharePointService: SharePointServiceManager;
export default SharePointService;
//# sourceMappingURL=SharePointService.d.ts.map