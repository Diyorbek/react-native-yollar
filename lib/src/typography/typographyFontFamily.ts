import { StyleSheet, TextStyle } from "react-native";
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import {
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";
import { useFonts } from "expo-font";

export function useLoadFonts() {
  const [isLoaded] = useFonts({
    "Montserrat-Bold": Montserrat_700Bold,
    "Montserrat-Regular": Montserrat_400Regular,
    "Montserrat-SemiBold": Montserrat_600SemiBold,
    "OpenSans-Bold": OpenSans_700Bold,
    "OpenSans-Regular": OpenSans_400Regular,
    "OpenSans-SemiBold": OpenSans_600SemiBold,
  });

  return isLoaded;
}

export type FontWeightVariant = "bold" | "semiBold" | "regular";
type FontFamilyWeight = Record<FontWeightVariant, TextStyle>;

const Montserrat = StyleSheet.create<FontFamilyWeight>({
  bold: {
    fontFamily: "Montserrat-Bold",
  },
  semiBold: {
    fontFamily: "Montserrat-SemiBold",
  },
  regular: {
    fontFamily: "Montserrat-Regular",
  },
});

const OpenSans = StyleSheet.create<FontFamilyWeight>({
  bold: {
    fontFamily: "OpenSans-Bold",
  },
  semiBold: {
    fontFamily: "OpenSans-SemiBold",
  },
  regular: {
    fontFamily: "OpenSans-Regular",
  },
});

export type FontFamilyVariant = "montserrat" | "open-sans";
type FontFamilyStyles = Record<FontFamilyVariant, FontFamilyWeight>;

export const fontFamilyStyles: FontFamilyStyles = {
  montserrat: Montserrat,
  "open-sans": OpenSans,
};
