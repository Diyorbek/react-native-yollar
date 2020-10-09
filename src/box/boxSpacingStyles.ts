import { useMemo } from "react";
import { StyleSheet } from "react-native";

const SPACING = 4;

type Spacing = number;

export interface OuterSpacingStyles {
  margin?: Spacing;
  marginBottom?: Spacing;
  marginEnd?: Spacing;
  marginHorizontal?: Spacing;
  marginLeft?: Spacing;
  marginRight?: Spacing;
  marginStart?: Spacing;
  marginTop?: Spacing;
  marginVertical?: Spacing;
}

export interface InnerSpacingStyles {
  padding?: Spacing;
  paddingBottom?: Spacing;
  paddingEnd?: Spacing;
  paddingHorizontal?: Spacing;
  paddingLeft?: Spacing;
  paddingRight?: Spacing;
  paddingStart?: Spacing;
  paddingTop?: Spacing;
  paddingVertical?: Spacing;
}

function covertStylesSpacingToUnit(
  props: OuterSpacingStyles | InnerSpacingStyles
): OuterSpacingStyles | InnerSpacingStyles {
  const spacingStyles: Record<string, number> = {};

  Object.entries(props).forEach(([name, value]) => {
    if (value != null) {
      spacingStyles[name] = value * SPACING;
    }
  });

  return StyleSheet.create({ style: spacingStyles }).style;
}

export function useBoxSpacingStyles<
  T extends OuterSpacingStyles | InnerSpacingStyles
>(props: T): T {
  return useMemo(() => covertStylesSpacingToUnit(props) as T, [props]);
}
