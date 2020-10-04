import { StyleSheet, TextStyle } from "react-native";
import { Colors } from "../Colors";
import { useColorSchemeToggle } from "../utils";

export type TypographyColor =
  | "primary"
  | "textPrimary"
  | "textSecondary"
  | "placeholder"
  | "danger";

type TypographyColors = Record<TypographyColor, TextStyle>;

const typographyLightColors = StyleSheet.create<TypographyColors>({
  primary: {
    color: Colors.Light.blue[200],
  },
  textPrimary: {
    color: Colors.Light.dark[500],
  },
  textSecondary: {
    color: Colors.Light.dark[300],
  },
  placeholder: {
    color: Colors.Light.dark[200],
  },
  danger: {
    color: Colors.Light.red[300],
  },
});

const typographyDarkColors = StyleSheet.create<TypographyColors>({
  primary: {
    color: Colors.Dark.blue[200],
  },
  textPrimary: {
    color: Colors.Dark.dark[500],
  },
  textSecondary: {
    color: Colors.Dark.dark[300],
  },
  placeholder: {
    color: Colors.Dark.dark[200],
  },
  danger: {
    color: Colors.Dark.red[300],
  },
});

export function useTypographyColors() {
  return useColorSchemeToggle(typographyLightColors, typographyDarkColors);
}
