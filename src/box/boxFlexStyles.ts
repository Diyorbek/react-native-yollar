import { FlexStyle } from "react-native";

export type InnerFlexStyles = Pick<
  FlexStyle,
  | "alignContent"
  | "alignItems"
  | "flexDirection"
  | "flexWrap"
  | "justifyContent"
>;

export type OuterFlexStyles = Pick<
  FlexStyle,
  | "alignSelf"
  | "bottom"
  | "end"
  | "flex"
  | "flexBasis"
  | "flexGrow"
  | "flexShrink"
  | "height"
  | "left"
  | "maxWidth"
  | "maxHeight"
  | "minWidth"
  | "minHeight"
  | "overflow"
  | "position"
  | "right"
  | "start"
  | "top"
  | "width"
>;
