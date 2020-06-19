import { useRef, useEffect } from "react";
export var usePreviousState = function (value) {
    var ref = useRef({});
    useEffect(function () {
        ref.current = value;
    });
    return ref.current;
};
//# sourceMappingURL=usePreviousState.js.map