import {
  ButtonGroupButtonContext_default,
  ButtonGroupContext_default
} from "./chunk-2XE26DO2.js";
import {
  createSimplePaletteValueFilter
} from "./chunk-G4FQZWC4.js";
import {
  capitalize_default
} from "./chunk-GDAFFYOE.js";
import {
  memoTheme_default
} from "./chunk-SCL7TEDA.js";
import {
  alpha,
  clsx_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  require_jsx_runtime,
  require_prop_types,
  styled_default,
  useDefaultProps
} from "./chunk-IOIN4PJR.js";
import {
  __toESM,
  require_react
} from "./chunk-Q462PRL3.js";

// node_modules/@mui/material/esm/ButtonGroup/ButtonGroup.js
var React2 = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);

// node_modules/@mui/utils/esm/getValidReactChildren/getValidReactChildren.js
var React = __toESM(require_react(), 1);
function getValidReactChildren(children) {
  return React.Children.toArray(children).filter((child) => React.isValidElement(child));
}

// node_modules/@mui/material/esm/ButtonGroup/buttonGroupClasses.js
function getButtonGroupUtilityClass(slot) {
  return generateUtilityClass("MuiButtonGroup", slot);
}
var buttonGroupClasses = generateUtilityClasses("MuiButtonGroup", ["root", "contained", "outlined", "text", "disableElevation", "disabled", "firstButton", "fullWidth", "horizontal", "vertical", "colorPrimary", "colorSecondary", "grouped", "groupedHorizontal", "groupedVertical", "groupedText", "groupedTextHorizontal", "groupedTextVertical", "groupedTextPrimary", "groupedTextSecondary", "groupedOutlined", "groupedOutlinedHorizontal", "groupedOutlinedVertical", "groupedOutlinedPrimary", "groupedOutlinedSecondary", "groupedContained", "groupedContainedHorizontal", "groupedContainedVertical", "groupedContainedPrimary", "groupedContainedSecondary", "lastButton", "middleButton"]);
var buttonGroupClasses_default = buttonGroupClasses;

// node_modules/@mui/material/esm/ButtonGroup/ButtonGroup.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [{
    [`& .${buttonGroupClasses_default.grouped}`]: styles.grouped
  }, {
    [`& .${buttonGroupClasses_default.grouped}`]: styles[`grouped${capitalize_default(ownerState.orientation)}`]
  }, {
    [`& .${buttonGroupClasses_default.grouped}`]: styles[`grouped${capitalize_default(ownerState.variant)}`]
  }, {
    [`& .${buttonGroupClasses_default.grouped}`]: styles[`grouped${capitalize_default(ownerState.variant)}${capitalize_default(ownerState.orientation)}`]
  }, {
    [`& .${buttonGroupClasses_default.grouped}`]: styles[`grouped${capitalize_default(ownerState.variant)}${capitalize_default(ownerState.color)}`]
  }, {
    [`& .${buttonGroupClasses_default.firstButton}`]: styles.firstButton
  }, {
    [`& .${buttonGroupClasses_default.lastButton}`]: styles.lastButton
  }, {
    [`& .${buttonGroupClasses_default.middleButton}`]: styles.middleButton
  }, styles.root, styles[ownerState.variant], ownerState.disableElevation === true && styles.disableElevation, ownerState.fullWidth && styles.fullWidth, ownerState.orientation === "vertical" && styles.vertical];
};
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    color,
    disabled,
    disableElevation,
    fullWidth,
    orientation,
    variant
  } = ownerState;
  const slots = {
    root: ["root", variant, orientation, fullWidth && "fullWidth", disableElevation && "disableElevation", `color${capitalize_default(color)}`],
    grouped: ["grouped", `grouped${capitalize_default(orientation)}`, `grouped${capitalize_default(variant)}`, `grouped${capitalize_default(variant)}${capitalize_default(orientation)}`, `grouped${capitalize_default(variant)}${capitalize_default(color)}`, disabled && "disabled"],
    firstButton: ["firstButton"],
    lastButton: ["lastButton"],
    middleButton: ["middleButton"]
  };
  return composeClasses(slots, getButtonGroupUtilityClass, classes);
};
var ButtonGroupRoot = styled_default("div", {
  name: "MuiButtonGroup",
  slot: "Root",
  overridesResolver
})(memoTheme_default(({
  theme
}) => ({
  display: "inline-flex",
  borderRadius: (theme.vars || theme).shape.borderRadius,
  variants: [{
    props: {
      variant: "contained"
    },
    style: {
      boxShadow: (theme.vars || theme).shadows[2]
    }
  }, {
    props: {
      disableElevation: true
    },
    style: {
      boxShadow: "none"
    }
  }, {
    props: {
      fullWidth: true
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      flexDirection: "column",
      [`& .${buttonGroupClasses_default.lastButton},& .${buttonGroupClasses_default.middleButton}`]: {
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0
      },
      [`& .${buttonGroupClasses_default.firstButton},& .${buttonGroupClasses_default.middleButton}`]: {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
      }
    }
  }, {
    props: {
      orientation: "horizontal"
    },
    style: {
      [`& .${buttonGroupClasses_default.firstButton},& .${buttonGroupClasses_default.middleButton}`]: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      },
      [`& .${buttonGroupClasses_default.lastButton},& .${buttonGroupClasses_default.middleButton}`]: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      }
    }
  }, {
    props: {
      variant: "text",
      orientation: "horizontal"
    },
    style: {
      [`& .${buttonGroupClasses_default.firstButton},& .${buttonGroupClasses_default.middleButton}`]: {
        borderRight: theme.vars ? `1px solid rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : `1px solid ${theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
        [`&.${buttonGroupClasses_default.disabled}`]: {
          borderRight: `1px solid ${(theme.vars || theme).palette.action.disabled}`
        }
      }
    }
  }, {
    props: {
      variant: "text",
      orientation: "vertical"
    },
    style: {
      [`& .${buttonGroupClasses_default.firstButton},& .${buttonGroupClasses_default.middleButton}`]: {
        borderBottom: theme.vars ? `1px solid rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : `1px solid ${theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
        [`&.${buttonGroupClasses_default.disabled}`]: {
          borderBottom: `1px solid ${(theme.vars || theme).palette.action.disabled}`
        }
      }
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).flatMap(([color]) => [{
    props: {
      variant: "text",
      color
    },
    style: {
      [`& .${buttonGroupClasses_default.firstButton},& .${buttonGroupClasses_default.middleButton}`]: {
        borderColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / 0.5)` : alpha(theme.palette[color].main, 0.5)
      }
    }
  }]), {
    props: {
      variant: "outlined",
      orientation: "horizontal"
    },
    style: {
      [`& .${buttonGroupClasses_default.firstButton},& .${buttonGroupClasses_default.middleButton}`]: {
        borderRightColor: "transparent",
        "&:hover": {
          borderRightColor: "currentColor"
        }
      },
      [`& .${buttonGroupClasses_default.lastButton},& .${buttonGroupClasses_default.middleButton}`]: {
        marginLeft: -1
      }
    }
  }, {
    props: {
      variant: "outlined",
      orientation: "vertical"
    },
    style: {
      [`& .${buttonGroupClasses_default.firstButton},& .${buttonGroupClasses_default.middleButton}`]: {
        borderBottomColor: "transparent",
        "&:hover": {
          borderBottomColor: "currentColor"
        }
      },
      [`& .${buttonGroupClasses_default.lastButton},& .${buttonGroupClasses_default.middleButton}`]: {
        marginTop: -1
      }
    }
  }, {
    props: {
      variant: "contained",
      orientation: "horizontal"
    },
    style: {
      [`& .${buttonGroupClasses_default.firstButton},& .${buttonGroupClasses_default.middleButton}`]: {
        borderRight: `1px solid ${(theme.vars || theme).palette.grey[400]}`,
        [`&.${buttonGroupClasses_default.disabled}`]: {
          borderRight: `1px solid ${(theme.vars || theme).palette.action.disabled}`
        }
      }
    }
  }, {
    props: {
      variant: "contained",
      orientation: "vertical"
    },
    style: {
      [`& .${buttonGroupClasses_default.firstButton},& .${buttonGroupClasses_default.middleButton}`]: {
        borderBottom: `1px solid ${(theme.vars || theme).palette.grey[400]}`,
        [`&.${buttonGroupClasses_default.disabled}`]: {
          borderBottom: `1px solid ${(theme.vars || theme).palette.action.disabled}`
        }
      }
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["dark"])).map(([color]) => ({
    props: {
      variant: "contained",
      color
    },
    style: {
      [`& .${buttonGroupClasses_default.firstButton},& .${buttonGroupClasses_default.middleButton}`]: {
        borderColor: (theme.vars || theme).palette[color].dark
      }
    }
  }))],
  [`& .${buttonGroupClasses_default.grouped}`]: {
    minWidth: 40,
    boxShadow: "none",
    props: {
      variant: "contained"
    },
    style: {
      "&:hover": {
        boxShadow: "none"
      }
    }
  }
})));
var ButtonGroup = React2.forwardRef(function ButtonGroup2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiButtonGroup"
  });
  const {
    children,
    className,
    color = "primary",
    component = "div",
    disabled = false,
    disableElevation = false,
    disableFocusRipple = false,
    disableRipple = false,
    fullWidth = false,
    orientation = "horizontal",
    size = "medium",
    variant = "outlined",
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    disableRipple,
    fullWidth,
    orientation,
    size,
    variant
  };
  const classes = useUtilityClasses(ownerState);
  const context = React2.useMemo(() => ({
    className: classes.grouped,
    color,
    disabled,
    disableElevation,
    disableFocusRipple,
    disableRipple,
    fullWidth,
    size,
    variant
  }), [color, disabled, disableElevation, disableFocusRipple, disableRipple, fullWidth, size, variant, classes.grouped]);
  const validChildren = getValidReactChildren(children);
  const childrenCount = validChildren.length;
  const getButtonPositionClassName = (index) => {
    const isFirstButton = index === 0;
    const isLastButton = index === childrenCount - 1;
    if (isFirstButton && isLastButton) {
      return "";
    }
    if (isFirstButton) {
      return classes.firstButton;
    }
    if (isLastButton) {
      return classes.lastButton;
    }
    return classes.middleButton;
  };
  return (0, import_jsx_runtime.jsx)(ButtonGroupRoot, {
    as: component,
    role: "group",
    className: clsx_default(classes.root, className),
    ref,
    ownerState,
    ...other,
    children: (0, import_jsx_runtime.jsx)(ButtonGroupContext_default.Provider, {
      value: context,
      children: validChildren.map((child, index) => {
        return (0, import_jsx_runtime.jsx)(ButtonGroupButtonContext_default.Provider, {
          value: getButtonPositionClassName(index),
          children: child
        }, index);
      })
    })
  });
});
true ? ButtonGroup.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types.default.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: import_prop_types.default.bool,
  /**
   * If `true`, the button keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: import_prop_types.default.bool,
  /**
   * If `true`, the button ripple effect is disabled.
   * @default false
   */
  disableRipple: import_prop_types.default.bool,
  /**
   * If `true`, the buttons will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types.default.bool,
  /**
   * The component orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation: import_prop_types.default.oneOf(["horizontal", "vertical"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["small", "medium", "large"]), import_prop_types.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["contained", "outlined", "text"]), import_prop_types.default.string])
} : void 0;
var ButtonGroup_default = ButtonGroup;
export {
  ButtonGroupButtonContext_default as ButtonGroupButtonContext,
  ButtonGroupContext_default as ButtonGroupContext,
  buttonGroupClasses_default as buttonGroupClasses,
  ButtonGroup_default as default,
  getButtonGroupUtilityClass
};
//# sourceMappingURL=@mui_material_ButtonGroup.js.map
