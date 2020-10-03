import { StyleSheet, ViewStyle } from "react-native";

export type BorderRaduis = 4 | 6 | 8;

type BorderRaduisStyles = Record<BorderRaduis, ViewStyle>;

export const borderRaduisStyles = StyleSheet.create<BorderRaduisStyles>({
  [4]: {
    borderRadius: 4,
  },
  [6]: {
    borderRadius: 6,
  },
  [8]: {
    borderRadius: 8,
  },
});
