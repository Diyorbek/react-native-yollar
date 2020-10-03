import * as React from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
import {
  typographyStyles,
  typographyTransformStyles,
  TypographyTransformVariant,
  TypographyVariant,
} from "./typographyStyles";
import {
  fontFamilyStyles,
  FontFamilyVariant,
  FontWeightVariant,
  useLoadFonts,
} from "./typographyFontFamily";
import { TypographyColor, useTypographyColors } from "./typographyColors";

interface UseTypographyStylesProps {
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
  fontWeight,
  transform,
}: UseTypographyStylesProps): TextStyle {
  const isFontsLoaded = useLoadFonts();
  const colors = useTypographyColors();
  const defaultFontWeight: FontWeightVariant = React.useMemo(
    () =>
      (["h1", "h2", "h3", "title"] as TypographyVariant[]).includes(variant)
        ? "bold"
        : "regular",
    [variant]
  );
  const fontStyles = React.useMemo(() => {
    if (isFontsLoaded) {
      return fontFamilyStyles[fontFamily][fontWeight || defaultFontWeight];
    }

    return {};
  }, [defaultFontWeight, fontFamily, fontWeight, isFontsLoaded]);

  return React.useMemo(() => {
    const styles = StyleSheet.flatten([
      typographyStyles[variant],
      colors[color],
      fontStyles,
      transform && typographyTransformStyles[transform],
    ]);

    return styles;
  }, [variant, fontStyles, color, transform]);
}

export interface TypographyProps
  extends React.PropsWithChildren<UseTypographyStylesProps> {
  textProps?: Omit<TextProps, "style">;
}

export function Typography({
  children,
  textProps,
  ...restProps
}: TypographyProps) {
  const styles = useTypographyStyles(restProps);

  return (
    <Text {...textProps} style={styles}>
      {children}
    </Text>
  );
}
