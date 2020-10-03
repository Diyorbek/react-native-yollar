import * as React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from "react-native";
import { useColors } from "../Colors";
import {
  fontFamilyStyles,
  useLoadFonts,
} from "../typography/typographyFontFamily";
import { textFieldStyles } from "./textFieldStyles";

export interface TextFieldProps extends TextInputProps {
  error?: boolean;
  helperText?: string;
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  variant?: "filled" | "outlined";
}

export const TextField = React.forwardRef<TextInput, TextFieldProps>(
  (
    {
      error,
      helperText,
      endAdornment,
      startAdornment,
      variant = "outlined",
      ...restProps
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const isFontLoaded = useLoadFonts();
    const Colors = useColors();
    const fontFamily = React.useMemo(
      () => (isFontLoaded ? fontFamilyStyles["open-sans"].regular : {}),
      [isFontLoaded]
    );

    const container = React.useMemo(
      () =>
        StyleSheet.flatten([
          textFieldStyles.container,
          {
            backgroundColor: variant === "filled" ? Colors.dark[50] : undefined,
            borderColor: error
              ? Colors.red[300]
              : isFocused
              ? Colors.blue[200]
              : variant === "filled"
              ? Colors.dark[50]
              : Colors.dark[200],
          } as TextStyle,
        ]),
      [isFocused]
    );

    const textInputStyles = React.useMemo(
      () => StyleSheet.flatten([textFieldStyles.textInput, fontFamily]),
      [fontFamily]
    );

    const { helperTextStyles } = React.useMemo(
      () =>
        StyleSheet.create({
          helperTextStyles: {
            marginTop: 8,
            paddingLeft: 16,
            fontSize: 15,
            lineHeight: 18,
            color: error ? Colors.red[300] : Colors.dark[300],
            ...fontFamily,
          },
        }),
      []
    );

    return (
      <View>
        <View style={container}>
          {startAdornment && (
            <View style={textFieldStyles.andornment}>{startAdornment}</View>
          )}

          <TextInput
            {...restProps}
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={textInputStyles}
          />

          {endAdornment && (
            <View style={textFieldStyles.andornment}>{endAdornment}</View>
          )}
        </View>

        {helperText && <Text style={helperTextStyles}>{helperText}</Text>}
      </View>
    );
  }
);
