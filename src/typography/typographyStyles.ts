import { useMemo } from "react";
import { StyleSheet, TextStyle } from "react-native";
import {
  TypographyColor,
  useTypographyColors,
} from "../shared/typographyColors";
import {
  FontWeightVariant,
  FontFamilyVariant,
  useLoadFonts,
  fontFamilyStyles,
} from "../shared/typographyFontFamily";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "title"
  | "body-20"
  | "body-17"
  | "body-15"
  | "caption-13"
  | "caption-11";

type TypographyStyles = Record<TypographyVariant, TextStyle>;

export const typographyStyles = StyleSheet.create<TypographyStyles>({
  h1: {
    fontSize: 40,
    lineHeight: 48,
    letterSpacing: 0.41,
  },
  h2: {
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 0.33,
  },
  h3: {
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0.35,
  },
  title: {
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: 0.41,
  },
  "body-20": {
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: 0.38,
  },
  "body-17": {
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: 0.38,
  },
  "body-15": {
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.35,
  },
  "caption-13": {
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0.35,
  },
  "caption-11": {
    fontSize: 11,
    lineHeight: 13,
    letterSpacing: 0.35,
  },
});

export type TypographyTransformVariant =
  | "capitalize"
  | "uppercase"
  | "lowercase";
type TypographyTransform = Record<TypographyTransformVariant, TextStyle>;

export const typographyTransformStyles = StyleSheet.create<TypographyTransform>(
  {
    capitalize: {
      textTransform: "capitalize",
    },
    lowercase: {
      textTransform: "lowercase",
    },
    uppercase: {
      textTransform: "uppercase",
    },
  }
);

export type TypographyAlignVariant =
  | "auto"
  | "left"
  | "right"
  | "center"
  | "justify";

type TypographyAlign = Record<TypographyAlignVariant, TextStyle>;

export const typographyAlignStyles = StyleSheet.create<TypographyAlign>({
  auto: { textAlign: "auto" },
  center: { textAlign: "center" },
  justify: { textAlign: "justify" },
  left: { textAlign: "left" },
  right: { textAlign: "right" },
});

export interface UseTypographyStylesProps {
  align?: TypographyAlignVariant;
  variant?: TypographyVariant;
  color?: TypographyColor;
  fontWeight?: FontWeightVariant;
  fontFamily?: FontFamilyVariant;
  transform?: TypographyTransformVariant;
}

export function useTypographyStyles({
  variant = "body-15",
  color = "textPrimary",
  fontFamily = "montserrat",
  align,
  fontWeight,
  transform,
}: UseTypographyStylesProps): TextStyle {
  const isFontsLoaded = useLoadFonts();
  const colors = useTypographyColors();
  const defaultFontWeight: FontWeightVariant = useMemo(
    () =>
      (["h1", "h2", "h3", "title"] as TypographyVariant[]).includes(variant)
        ? "bold"
        : "regular",
    [variant]
  );
  const fontStyles = useMemo(() => {
    if (isFontsLoaded) {
      return fontFamilyStyles[fontFamily][fontWeight || defaultFontWeight];
    }

    return {};
  }, [defaultFontWeight, fontFamily, fontWeight, isFontsLoaded]);

  return useMemo(() => {
    const styles = StyleSheet.flatten([
      typographyStyles[variant],
      colors[color],
      fontStyles,
      transform && typographyTransformStyles[transform],
      align && typographyAlignStyles[align],
    ]);

    return styles;
  }, [variant, fontStyles, color, transform]);
}
