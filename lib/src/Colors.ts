import { ColorValue } from "react-native";
import { useColorSchemeToggle } from "./utils";

type ColorName = "blue" | "dark" | "red" | "white";

interface ColorShade {
  [50]?: ColorValue;
  [75]?: ColorValue;
  [80]?: ColorValue;
  [100]?: ColorValue;
  [200]?: ColorValue;
  [250]?: ColorValue;
  [300]?: ColorValue;
  [400]?: ColorValue;
  [500]?: ColorValue;
}

type Palette = Record<ColorName, ColorShade>;

const LightThemeColors: Palette = {
  blue: {
    [50]: "#DEEBFF",
    [75]: "#B2D4FF",
    [100]: "#4C9AFF",
    [200]: "#2684FF",
    [300]: "#0065FF",
    [400]: "#0052CC",
    [500]: "#0747A6",
  },
  dark: {
    [50]: "#F5F7FA",
    [100]: "#DDE4EE",
    [200]: "#AFBCCF",
    [250]: "#8B96A7",
    [300]: "#636F82",
    [500]: "#141C29",
  },
  red: {
    [50]: "#FFEBE5",
    [75]: "#FFBDAD",
    [100]: "#FF8F73",
    [200]: "#FF7452",
    [300]: "#FF5630",
    [400]: "#DE350B",
    [500]: "#BF2600",
  },
  white: {
    [80]: "#FFFFFFCC",
    [100]: "#FFFFFF",
  },
};

// TODO: Set proper colors
const DarkThemeColors: Palette = {
  blue: {
    [50]: "#DEEBFF",
    [75]: "#B2D4FF",
    [100]: "#4C9AFF",
    [200]: "#2684FF",
    [300]: "#0065FF",
    [400]: "#0052CC",
    [500]: "#0747A6",
  },
  dark: {
    [50]: "#F5F7FA",
    [100]: "#DDE4EE",
    [200]: "#AFBCCF",
    [250]: "#8B96A7",
    [300]: "#636F82",
    [500]: "#141C29",
  },
  red: {
    [50]: "#FFEBE5",
    [75]: "#FFBDAD",
    [100]: "#FF8F73",
    [200]: "#FF7452",
    [300]: "#FF5630",
    [400]: "#DE350B",
    [500]: "#BF2600",
  },
  white: {
    [80]: "#FFFFFFCC",
    [100]: "#FFFFFF",
  },
};

export const Colors = {
  Dark: DarkThemeColors,
  Light: LightThemeColors,
};

export function useColors(
  options = {
    toggleColorScheme: true,
  }
) {
  const colorScheme = useColorSchemeToggle(LightThemeColors, DarkThemeColors);

  if (!options.toggleColorScheme) {
    return LightThemeColors;
  }

  return colorScheme;
}
