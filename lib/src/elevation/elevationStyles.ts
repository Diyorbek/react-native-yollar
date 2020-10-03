import { useMemo } from "react";
import { ColorValue, Platform, StyleSheet, ViewStyle } from "react-native";
import { useColors } from "../Colors";
import { BorderRaduis, borderRaduisStyles } from "./borderRadiusStyles";

interface ElevationStyle {
  inner: ViewStyle;
  outer: ViewStyle;
}

export type ElevationLevel = 0 | 1 | 3 | 5;

type ElevationStyles = Record<ElevationLevel, ElevationStyle>;

export const elevationStyles: ElevationStyles = {
  [0]: StyleSheet.create<ElevationStyle>({
    inner: {},
    outer: {},
  }),
  [1]: StyleSheet.create<ElevationStyle>({
    inner: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.12,
      shadowRadius: 2,
    },
    outer: {
      shadowColor: "#000",
      shadowOpacity: 0.06,
      shadowRadius: 6,
      zIndex: 1,
      elevation: 4,
    },
  }),
  [3]: StyleSheet.create<ElevationStyle>({
    inner: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.12,
      shadowRadius: 20,
    },
    outer: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.08,
      shadowRadius: 6,
      zIndex: 3,
      elevation: 8,
    },
  }),
  [5]: StyleSheet.create<ElevationStyle>({
    inner: {},
    outer: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.18,
      shadowRadius: 24,
      zIndex: 5,
      elevation: 12,
    },
  }),
};

export interface UseElevationStyles {
  level?: ElevationLevel;
  borderRadius?: BorderRaduis;
  backgroundColor?: ColorValue;
  outline?: boolean;
}

export function useElevationStyles({
  backgroundColor,
  borderRadius,
  level = 0,
  outline,
}: UseElevationStyles) {
  const Colors = useColors();

  return useMemo(() => {
    const borderRaduisStyle = borderRadius && borderRaduisStyles[borderRadius];
    const backgroundColorStyle = {
      backgroundColor: backgroundColor || Colors.white[100],
    } as ViewStyle;

    const { inner, outer } =
      level === 5
        ? elevationStyles[5]
        : level === 3
        ? elevationStyles[3]
        : level === 1
        ? elevationStyles[1]
        : elevationStyles[0];

    const elevation: ElevationStyle = {
      inner: StyleSheet.flatten([
        inner,
        borderRaduisStyle,
        Platform.OS === "ios" ? backgroundColorStyle : undefined,
      ]),
      outer: StyleSheet.flatten([
        outer,
        borderRaduisStyle,
        backgroundColorStyle,
        outline && {
          borderColor: Colors.dark[500],
          borderWidth: 1,
        },
      ]),
    };

    return elevation;
  }, [backgroundColor, borderRadius, level, outline]);
}
