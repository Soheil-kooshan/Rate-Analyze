import {
  useForkRef
} from "./chunk-MYR2H2I2.js";
import {
  isMuiElement,
  useEnhancedEffect_default
} from "./chunk-IOIN4PJR.js";
import {
  __toESM,
  require_react
} from "./chunk-Q462PRL3.js";

// node_modules/@mui/material/esm/utils/isMuiElement.js
var isMuiElement_default = isMuiElement;

// node_modules/@mui/material/esm/utils/useEnhancedEffect.js
var useEnhancedEffect_default2 = useEnhancedEffect_default;

// node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js
var React = __toESM(require_react(), 1);
function useEventCallback(fn) {
  const ref = React.useRef(fn);
  useEnhancedEffect_default(() => {
    ref.current = fn;
  });
  return React.useRef((...args) => (
    // @ts-expect-error hide `this`
    (0, ref.current)(...args)
  )).current;
}
var useEventCallback_default = useEventCallback;

// node_modules/@mui/material/esm/utils/useEventCallback.js
var useEventCallback_default2 = useEventCallback_default;

// node_modules/@mui/material/esm/utils/useForkRef.js
var useForkRef_default = useForkRef;

export {
  isMuiElement_default,
  useEnhancedEffect_default2 as useEnhancedEffect_default,
  useEventCallback_default2 as useEventCallback_default,
  useForkRef_default
};
//# sourceMappingURL=chunk-VGY2E7MA.js.map
