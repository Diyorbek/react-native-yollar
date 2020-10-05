import * as React from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { useColors } from "../Colors";
import { borderRaduisStyles } from "../shared/borderRadiusStyles";
import { useTypographyStyles } from "../typography/Typography";
import { buttonStyles } from "./buttonStyles";

export type ButtonColor = "default" | "primary";

export interface ButtonProps
  extends React.PropsWithChildren<Omit<TouchableOpacityProps, "style">> {
  color?: ButtonColor;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  variant?: "contained" | "outlined";
}

export function Button({
  children,
  color = "default",
  variant = "outlined",
  ...props
}: ButtonProps) {
  const Colors = useColors();
  const textStyles = useTypographyStyles({
    fontFamily: "montserrat",
    fontWeight: "semiBold",
    variant: "body-17",
  });
  const { backgroundColor, borderColor, textColor } = React.useMemo(() => {
    const backgroundColor =
      variant === "contained"
        ? color === "default"
          ? Colors.dark[500]
          : Colors.blue[300]
        : Colors.white[100];

    const textColor =
      variant === "outlined"
        ? color === "default"
          ? Colors.dark[500]
          : Colors.blue[300]
        : Colors.white[100];

    const borderColor = variant === "outlined" ? textColor : backgroundColor;

    return {
      backgroundColor,
      borderColor,
      textColor,
    };
  }, [Colors]);

  const { containerStyles, labelStyles } = React.useMemo(() => {
    return {
      containerStyles: StyleSheet.flatten([
        buttonStyles.container,
        borderRaduisStyles[8],
        { backgroundColor, borderColor } as ViewStyle,
      ]),
      labelStyles: StyleSheet.flatten([
        textStyles,
        { color: textColor } as TextStyle,
      ]),
    };
  }, [backgroundColor, borderColor, textColor, textStyles]);

  return (
    <TouchableOpacity {...props} style={containerStyles}>
      <Text style={labelStyles}>{children}</Text>
    </TouchableOpacity>
  );
}
