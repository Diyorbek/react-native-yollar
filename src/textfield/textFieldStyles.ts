import { StyleSheet } from "react-native";
import { typographyStyles } from "../typography/typographyStyles";

export const textFieldStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 8,
    borderWidth: 2,
    paddingHorizontal: 8,
  },
  textInput: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    ...typographyStyles["body-17"],
  },
  andornment: {
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});
