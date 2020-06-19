import { mergeStyleSets, getTheme, FontWeights, } from "office-ui-fabric-react";
var theme = getTheme();
export var cardContextualManuStackStyle = function () { return ({ root: { marginTop: 10 } }); };
export var tooltipStyles = {
    root: { display: "flex", margin: "auto" },
};
export var menuItemsCalloutStyle = mergeStyleSets({
    buttonArea: {
        verticalAlign: "top",
        display: "inline-block",
        textAlign: "center",
        margin: "0 100px",
        minWidth: 130,
        height: 32,
    },
    callout: {
        width: 250,
    },
    header: {
        padding: "20px 10px 10px 5px",
        textAlign: "center",
        fontSize: 15,
        fontWeight: 300,
    },
    title: [
        theme.fonts.xLarge,
        {
            margin: 0,
            fontWeight: FontWeights.semilight,
        },
    ],
    inner: {
        height: 220,
        padding: "0 14px 10px",
    },
    actions: {
        position: "relative",
        marginTop: 20,
        width: "100%",
        whiteSpace: "nowrap",
    },
    subtext: [
        theme.fonts.small,
        {
            margin: 0,
            fontWeight: FontWeights.semilight,
        },
    ],
    link: [
        theme.fonts.medium,
        {
            color: theme.palette.neutralPrimary,
        },
    ],
});
//# sourceMappingURL=fabricStyles.js.map