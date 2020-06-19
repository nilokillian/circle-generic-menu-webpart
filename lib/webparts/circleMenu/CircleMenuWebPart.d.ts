import { Version } from "@microsoft/sp-core-library";
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { ICircleMenuWebPartProps } from "./interfaces/ICircleMenuWebPartProps";
export default class CircleMenuWebPart extends BaseClientSideWebPart<ICircleMenuWebPartProps> {
    render(): void;
    protected onDispose(): void;
    onInit(): Promise<void>;
    protected readonly dataVersion: Version;
    protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=CircleMenuWebPart.d.ts.map