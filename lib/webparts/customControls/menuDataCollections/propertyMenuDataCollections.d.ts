import { IPropertyPaneField, PropertyPaneFieldType, IPropertyPaneCustomFieldProps } from "@microsoft/sp-property-pane";
import { IPropertyMenuDataCollectionsProps } from "./interfaces/IPropertyMenuDataCollectionsProps";
export interface IPropertyMenuDataCollectionsInternalProps extends IPropertyMenuDataCollectionsProps, IPropertyPaneCustomFieldProps {
}
export declare class PropertyMenuDataCollections implements IPropertyPaneField<IPropertyMenuDataCollectionsProps> {
    type: PropertyPaneFieldType;
    targetProperty: string;
    properties: IPropertyMenuDataCollectionsInternalProps;
    private elem;
    constructor(targetProperty: string, properties: IPropertyMenuDataCollectionsProps);
    render(): void;
    private onRender;
    private onChanged;
}
//# sourceMappingURL=propertyMenuDataCollections.d.ts.map