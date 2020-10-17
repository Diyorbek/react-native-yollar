import * as React from "react";
import { Text, TextProps } from "react-native";
import {
  useTypographyStyles,
  UseTypographyStylesProps,
} from "./typographyStyles";

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
