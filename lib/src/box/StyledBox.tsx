import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useElevationStyles } from "../elevation/elevationStyles";
import { PaperProps } from "../paper/Paper";
import {
  useBoxSpacingStyles,
  InnerSpacingStyles,
  OuterSpacingStyles,
} from "./boxSpacingStyles";
import { InnerFlexStyles, OuterFlexStyles } from "./boxFlexStyles";
import { BoxBorderStyles } from "./boxBorderStyles";

interface StyledBoxProps {
  borderStyles: BoxBorderStyles;
  innerSpacingStyles: InnerSpacingStyles;
  innerFlexStyles: InnerFlexStyles;
  outerSpacingStyles: OuterSpacingStyles;
  outerFlexStyles: OuterFlexStyles;
  paperProps: PaperProps;
}

export function StyledBox({
  borderStyles,
  innerSpacingStyles,
  innerFlexStyles,
  outerSpacingStyles,
  outerFlexStyles,
  paperProps: {
    backgroundColor = "transparent",
    borderRadius,
    elevation = 0,
    ...restProps
  },
}: StyledBoxProps) {
  const { inner: innerElevation, outer: outerElevation } = useElevationStyles({
    backgroundColor,
    borderRadius,
    level: elevation,
  });
  const innerSpacing = useBoxSpacingStyles(innerSpacingStyles);
  const outerSpacing = useBoxSpacingStyles(outerSpacingStyles);

  const { flexItem } = React.useMemo(() => {
    return StyleSheet.create({ flexItem: outerFlexStyles });
  }, [outerFlexStyles]);

  const { flexBox } = React.useMemo(() => {
    return StyleSheet.create({ flexBox: { ...innerFlexStyles, flex: 1 } });
  }, [innerFlexStyles]);

  const outerStyles = React.useMemo(
    () =>
      StyleSheet.flatten([
        flexItem,
        outerElevation,
        outerSpacing,
        borderStyles,
      ]),
    [borderStyles, flexItem, outerElevation, outerSpacing]
  );

  const innerStyles = React.useMemo(
    () => StyleSheet.flatten([flexBox, innerElevation, innerSpacing]),
    [flexBox, innerElevation, innerSpacing]
  );

  return (
    <View style={outerStyles}>
      <View style={innerStyles} {...restProps} />
    </View>
  );
}
