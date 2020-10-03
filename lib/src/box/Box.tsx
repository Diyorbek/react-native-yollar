import * as React from "react";
import { PaperProps } from "../paper/Paper";
import { InnerSpacingStyles, OuterSpacingStyles } from "./boxSpacingStyles";
import { InnerFlexStyles, OuterFlexStyles } from "./boxFlexStyles";
import { StyledBox } from "./StyledBox";
import { BoxBorderStyles } from "./boxBorderStyles";

export interface BoxProps
  extends PaperProps,
    BoxBorderStyles,
    InnerSpacingStyles,
    InnerFlexStyles,
    OuterSpacingStyles,
    OuterFlexStyles {}

export function Box({
  // Border styles
  borderBottomWidth,
  borderEndWidth,
  borderLeftWidth,
  borderRightWidth,
  borderStartWidth,
  borderTopWidth,
  borderWidth,

  // Outer spacing
  margin,
  marginBottom,
  marginEnd,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginStart,
  marginTop,
  marginVertical,

  // Inner spacing
  padding,
  paddingBottom,
  paddingEnd,
  paddingHorizontal,
  paddingLeft,
  paddingRight,
  paddingStart,
  paddingTop,
  paddingVertical,

  // Inner flex props
  alignContent,
  alignItems,
  flexDirection,
  flexWrap,
  justifyContent,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  overflow,
  width,

  // Outer flex props
  alignSelf,
  bottom,
  end,
  flex,
  flexBasis,
  flexGrow,
  flexShrink,
  left,
  position,
  right,
  start,
  top,

  ...paperProps
}: BoxProps) {
  const borderStyles: BoxBorderStyles = {
    borderBottomWidth,
    borderEndWidth,
    borderLeftWidth,
    borderRightWidth,
    borderStartWidth,
    borderTopWidth,
    borderWidth,
  };

  const innerSpacing: InnerSpacingStyles = {
    padding,
    paddingBottom,
    paddingEnd,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    paddingStart,
    paddingTop,
    paddingVertical,
  };

  const outerSpacing: OuterSpacingStyles = {
    margin,
    marginBottom,
    marginEnd,
    marginHorizontal,
    marginLeft,
    marginRight,
    marginStart,
    marginTop,
    marginVertical,
  };

  const outerFlexStyles: OuterFlexStyles = {
    alignSelf,
    bottom,
    end,
    flex,
    flexBasis,
    flexGrow,
    flexShrink,
    height,
    left,
    maxWidth,
    maxHeight,
    minWidth,
    minHeight,
    overflow,
    position,
    right,
    start,
    top,
    width,
  };

  const innerFlexStyles: InnerFlexStyles = {
    alignContent,
    alignItems,
    flexDirection,
    flexWrap,
    justifyContent,
  };

  return (
    <StyledBox
      borderStyles={borderStyles}
      innerFlexStyles={innerFlexStyles}
      innerSpacingStyles={innerSpacing}
      outerFlexStyles={outerFlexStyles}
      outerSpacingStyles={outerSpacing}
      paperProps={paperProps}
    />
  );
}
